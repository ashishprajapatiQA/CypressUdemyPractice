// Chaos configuration
const chaosConfig = {
    hoverCount: 100,
    hoverDelay: 50,
    rageClickCount: 6,
    rageClickDelay: 10,
    crawlCountMin: 1,
    crawlCountMax: 15,
    postActionDelay: 2000,
    navigationDelay: 3000,
    identifyDelay: 5000,
    apiClickDelay: 3000,
    rageClickWait: 6000,
  };
  
  function generateRandomUser() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const length = Math.floor(Math.random() * 6) + 5;
    let brand = '';
    for (let i = 0; i < length; i++) {
      brand += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const name = brand.charAt(0).toUpperCase() + brand.slice(1);
    const domain = `${brand}.com`;
    const email = `${brand}${Math.floor(Math.random() * 1000)}@${domain}`;
    return { name, email };
  }
  
  function randomRapidHover() {
    cy.get('body').then(($body) => {
      const bodyWidth = $body.width();
      const bodyHeight = $body.height();
  
      for (let i = 0; i < chaosConfig.hoverCount; i++) {
        const posX = Math.floor(Math.random() * bodyWidth);
        const posY = Math.floor(Math.random() * bodyHeight);
        cy.wrap($body).trigger('mousemove', { clientX: posX, clientY: posY, force: true });
        cy.wait(chaosConfig.hoverDelay);
      }
      cy.log('Performed rapid hover at random positions');
    });
  }
  
  function performDeadClick() {
    cy.get('body').click('topLeft');
    cy.log('Performed dead click');
  }
  
  function performRageClickOnGetUsers() {
    cy.get('body').then(($body) => {
      const $btn = $body.find('button:contains("GET Users")');
      if ($btn.length > 0) {
        cy.wrap($btn.first()).as('getUsersBtn');
        for (let i = 0; i < chaosConfig.rageClickCount; i++) {
          cy.get('@getUsersBtn').click({ force: true });
          cy.wait(chaosConfig.rageClickDelay);
        }
        cy.log('Performed rage click on "GET Users" button');
      } else {
        cy.log('No "GET Users" button found for rage click');
      }
    });
  }
  
  function performRandomNavLinkCrawl() {
    cy.get('a.nav-link').then(($links) => {
      const total = $links.length;
      const clickCount = Math.min(
        Math.floor(Math.random() * (chaosConfig.crawlCountMax - chaosConfig.crawlCountMin + 1)) + chaosConfig.crawlCountMin,
        total
      );
      cy.log(`Crawling ${clickCount} nav links`);
      console.log('counts -', clickCount);
  
      for (let i = 0; i < clickCount; i++) {
        cy.get('a.nav-link').then(($freshLinks) => {
          const randomIndex = Math.floor(Math.random() * $freshLinks.length);
          cy.wrap($freshLinks[randomIndex]).click({ force: true });
        });
  
        randomRapidHover();
        cy.wait(chaosConfig.postActionDelay);
  
        performDeadClick();
        cy.wait(chaosConfig.postActionDelay);
  
        // wait for navigation before next re-query
        cy.wait(chaosConfig.navigationDelay);
      }
    });
  }
  
  describe('Chaos navigation with user identify and API rage click crawl', () => {
    const testUrl = 'https://qa-replay.netlify.app/';
    const repeatCount = 10;
  
    for (let run = 1; run <= repeatCount; run++) {
      it(`Execution run #${run}`, () => {
        cy.visit(testUrl);
        cy.wait(2000);
  
        // Identify user once
        cy.window().then((win) => {
          const randomId = `user_${Math.floor(Math.random() * 100000)}`;
          const { name, email } = generateRandomUser();
          if (win.uzera && typeof win.uzera.identify === 'function') {
            win.uzera.identify(randomId, { name, email });
            win.console.log('uzera.identify executed', { id: randomId, name, email });
          }
        });
  
        cy.wait(chaosConfig.identifyDelay);
  
        // Click nav-link with text "API" or href containing "api"
        cy.get('body').then(($body) => {
          const $links = $body.find('a.nav-link');
          const targetLink = [...$links].find(
            (el) =>
              el.innerText.toLowerCase().includes('api') ||
              (el.getAttribute('href') || '').toLowerCase().includes('api')
          );
          if (targetLink) {
            cy.wrap(targetLink).click({ force: true });
            cy.log('Clicked nav-link with "API"');
          } else {
            cy.log('No nav-link with "API" found');
          }
        });
  
        cy.wait(chaosConfig.apiClickDelay);
  
        // Perform chaos actions
        randomRapidHover();
        cy.wait(chaosConfig.postActionDelay);
  
        performDeadClick();
        cy.wait(chaosConfig.postActionDelay);
  
        performRageClickOnGetUsers();
        cy.wait(chaosConfig.rageClickWait);
  
        // Crawl other nav-links randomly multiple times
        performRandomNavLinkCrawl();
        cy.wait(chaosConfig.postActionDelay);
  
        cy.log(`Run #${run} completed`);
      });
    }
  });