// ============================================================
// ORIGINAL CODE (commented out)
// ============================================================

// // Chaos configuration
// const chaosConfig = {
//   hoverCount: 100,
//   hoverDelay: 50,
//   rageClickCount: 6,
//   rageClickDelay: 10,
//   crawlCountMin: 1,
//   crawlCountMax: 15,
//   postActionDelay: 2000,
//   navigationDelay: 3000,
//   identifyDelay: 5000,
//   apiClickDelay: 3000,
//   rageClickWait: 6000,
// };
//
// function generateRandomUser() {
//   const chars = 'abcdefghijklmnopqrstuvwxyz';
//   const length = Math.floor(Math.random() * 6) + 5;
//   let brand = '';
//   for (let i = 0; i < length; i++) {
//     brand += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   const name = brand.charAt(0).toUpperCase() + brand.slice(1);
//   const domain = `${brand}.com`;
//   const email = `${brand}${Math.floor(Math.random() * 1000)}@${domain}`;
//   return { name, email };
// }
//
// function randomRapidHover() {
//   cy.get('body').then(($body) => {
//     const bodyWidth = $body.width();
//     const bodyHeight = $body.height();
//
//     for (let i = 0; i < chaosConfig.hoverCount; i++) {
//       const posX = Math.floor(Math.random() * bodyWidth);
//       const posY = Math.floor(Math.random() * bodyHeight);
//       cy.wrap($body).trigger('mousemove', { clientX: posX, clientY: posY, force: true });
//       cy.wait(chaosConfig.hoverDelay);
//     }
//     cy.log('Performed rapid hover at random positions');
//   });
// }
//
// function performDeadClick() {
//   cy.get('body').click('topLeft');
//   cy.log('Performed dead click');
// }
//
// function performRageClickOnGetUsers() {
//   cy.get('body').then(($body) => {
//     const $btn = $body.find('button:contains("GET Users")');
//     if ($btn.length > 0) {
//       cy.wrap($btn.first()).as('getUsersBtn');
//       for (let i = 0; i < chaosConfig.rageClickCount; i++) {
//         cy.get('@getUsersBtn').click({ force: true });
//         cy.wait(chaosConfig.rageClickDelay);
//       }
//       cy.log('Performed rage click on "GET Users" button');
//     } else {
//       cy.log('No "GET Users" button found for rage click');
//     }
//   });
// }
//
// function performRandomNavLinkCrawl() {
//   cy.get('a.nav-link').then(($links) => {
//     const total = $links.length;
//     const clickCount = Math.min(
//       Math.floor(Math.random() * (chaosConfig.crawlCountMax - chaosConfig.crawlCountMin + 1)) + chaosConfig.crawlCountMin,
//       total
//     );
//     cy.log(`Crawling ${clickCount} nav links`);
//     console.log('counts -', clickCount);
//
//     for (let i = 0; i < clickCount; i++) {
//       cy.get('a.nav-link').then(($freshLinks) => {
//         const randomIndex = Math.floor(Math.random() * $freshLinks.length);
//         cy.wrap($freshLinks[randomIndex]).click({ force: true });
//       });
//
//       randomRapidHover();
//       cy.wait(chaosConfig.postActionDelay);
//
//       performDeadClick();
//       cy.wait(chaosConfig.postActionDelay);
//
//       // wait for navigation before next re-query
//       cy.wait(chaosConfig.navigationDelay);
//     }
//   });
// }
//
// describe('Chaos navigation with user identify and API rage click crawl', () => {
//   const testUrl = 'https://qa-replay.netlify.app/';
//   const repeatCount = 10;
//
//   for (let run = 1; run <= repeatCount; run++) {
//     it(`Execution run #${run}`, () => {
//       cy.visit(testUrl);
//       cy.wait(2000);
//
//       // Identify user once
//       cy.window().then((win) => {
//         const randomId = `user_${Math.floor(Math.random() * 100000)}`;
//         const { name, email } = generateRandomUser();
//         if (win.uzera && typeof win.uzera.identify === 'function') {
//           win.uzera.identify(randomId, { name, email });
//           win.console.log('uzera.identify executed', { id: randomId, name, email });
//         }
//       });
//
//       cy.wait(chaosConfig.identifyDelay);
//
//       // Click nav-link with text "API" or href containing "api"
//       cy.get('body').then(($body) => {
//         const $links = $body.find('a.nav-link');
//         const targetLink = [...$links].find(
//           (el) =>
//             el.innerText.toLowerCase().includes('api') ||
//             (el.getAttribute('href') || '').toLowerCase().includes('api')
//         );
//         if (targetLink) {
//           cy.wrap(targetLink).click({ force: true });
//           cy.log('Clicked nav-link with "API"');
//         } else {
//           cy.log('No nav-link with "API" found');
//         }
//       });
//
//       cy.wait(chaosConfig.apiClickDelay);
//
//       // Perform chaos actions
//       randomRapidHover();
//       cy.wait(chaosConfig.postActionDelay);
//
//       performDeadClick();
//       cy.wait(chaosConfig.postActionDelay);
//
//       performRageClickOnGetUsers();
//       cy.wait(chaosConfig.rageClickWait);
//
//       // Crawl other nav-links randomly multiple times
//       performRandomNavLinkCrawl();
//       cy.wait(chaosConfig.postActionDelay);
//
//       cy.log(`Run #${run} completed`);
//     });
//   }
// });

// ============================================================
// NEW CODE — session cap + random inactivity period
// ============================================================

const chaosConfig = {
  hoverCount: 100,
  hoverDelay: 50,
  rageClickCount: 6,
  rageClickDelay: 10,
  crawlCountMin: 7,
  crawlCountMax: 15,
  postActionDelay: 2000,
  navigationDelay: 3000,
  identifyDelay: 5000,
  apiClickDelay: 3000,
  rageClickWait: 6000,
  maxSessionDuration: 2,      // ← minutes — change to adjust session cap
  inactivityDuration: 30000,  // ← ms — change to adjust idle pause (30s)
};

function isTimeUp(startTime) {
  const sessionLimitMs = chaosConfig.maxSessionDuration * 60 * 1000;
  return Date.now() - startTime >= sessionLimitMs;
}

function maybeInactive(gapIndex, inactivityAt) {
  if (gapIndex === inactivityAt) {
    cy.log(`💤 Inactivity period — idle for ${chaosConfig.inactivityDuration / 1000}s`);
    cy.wait(chaosConfig.inactivityDuration);
    cy.log('▶ Resuming activity');
  }
}

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

function performRandomNavLinkCrawl(startTime) {
  cy.get('a.nav-link').then(($links) => {
    const total = $links.length;
    const clickCount = Math.min(
      Math.floor(Math.random() * (chaosConfig.crawlCountMax - chaosConfig.crawlCountMin + 1)) + chaosConfig.crawlCountMin,
      total
    );
    cy.log(`Crawling up to ${clickCount} nav links`);

    for (let i = 0; i < clickCount; i++) {
      cy.then(() => {
        if (isTimeUp(startTime)) {
          cy.log(`⏱ Session time limit reached — stopping crawl at iteration ${i}`);
          return;
        }
        cy.get('a.nav-link').then(($freshLinks) => {
          const randomIndex = Math.floor(Math.random() * $freshLinks.length);
          cy.wrap($freshLinks[randomIndex]).click({ force: true });
        });
        randomRapidHover();
        cy.wait(chaosConfig.postActionDelay);
        performDeadClick();
        cy.wait(chaosConfig.postActionDelay);
        cy.wait(chaosConfig.navigationDelay);
      });
    }
  });
}

// Ignore all uncaught exceptions thrown by the app (not test code)
Cypress.on('uncaught:exception', () => false);

describe('Chaos navigation with user identify and API rage click crawl', () => {
  const testUrl = 'https://qa-replay.netlify.app/';
  const repeatCount = 1;

  for (let run = 1; run <= repeatCount; run++) {
    it(`Execution run #${run}`, () => {
      let startTime;
      // 4 gaps between 5 phases — idle fires at one random gap each run
      // gap 0 = after API nav, 1 = after hover, 2 = after dead click, 3 = after rage click
      const inactivityAt = Math.floor(Math.random() * 4);
      cy.log(`🎲 Inactivity will fire at gap ${inactivityAt}`);

      cy.visit(testUrl);
      cy.wait(2000);
      cy.then(() => { startTime = Date.now(); });

      // Identify user
      cy.window().then((win) => {
        const randomId = `user_${Math.floor(Math.random() * 100000)}`;
        const { name, email } = generateRandomUser();
        if (win.uzera && typeof win.uzera.identify === 'function') {
          win.uzera.identify(randomId, { name, email });
          win.console.log('uzera.identify executed', { id: randomId, name, email });
        }
      });
      cy.wait(chaosConfig.identifyDelay);

      // Phase 1: Navigate to API page
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

      // Click buttons on the API page — pick one total count (5, 10, or 15) and click random buttons that many times
      cy.get('body').then(($body) => {
        const $buttons = $body.find('button');
        const clickOptions = [5, 10, 15];
        const totalClicks = clickOptions[Math.floor(Math.random() * clickOptions.length)];
        if ($buttons.length > 0) {
          cy.log(`Found ${$buttons.length} button(s) on API page — will click ${totalClicks} times total`);
          for (let c = 0; c < totalClicks; c++) {
            const randomIndex = Math.floor(Math.random() * $buttons.length);
            const btn = $buttons[randomIndex];
            cy.wrap(btn).click({ force: true });
            cy.wait(500);
            cy.log(`Click ${c + 1}/${totalClicks} — "${btn.innerText.trim()}"`);
          }
        } else {
          cy.log('No buttons found on API page');
        }
      });
      cy.wait(chaosConfig.postActionDelay);

      // Gap 0 — between API nav and hover
      cy.then(() => { maybeInactive(0, inactivityAt); });

      // Phase 2: Rapid hover
      randomRapidHover();
      cy.wait(chaosConfig.postActionDelay);

      // Gap 1 — between hover and dead click
      cy.then(() => { maybeInactive(1, inactivityAt); });

      // Phase 3: Dead click
      performDeadClick();
      cy.wait(chaosConfig.postActionDelay);

      // Gap 2 — between dead click and rage click
      cy.then(() => { maybeInactive(2, inactivityAt); });

      // Phase 4: Rage click on GET Users
      performRageClickOnGetUsers();
      cy.wait(chaosConfig.rageClickWait);

      // Gap 3 — between rage click and crawl
      cy.then(() => { maybeInactive(3, inactivityAt); });

      // Phase 5: Crawl nav links (time-guarded)
      // wrapped in cy.then so startTime is read at execution time, not queue-build time
      cy.then(() => { performRandomNavLinkCrawl(startTime); });
      cy.wait(chaosConfig.postActionDelay);

      cy.log(`✅ Run #${run} completed`);
    });
  }
});
