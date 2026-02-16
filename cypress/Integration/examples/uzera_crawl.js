

// // cypress/e2e/uzera_crawl.cy.js

// function generateRandomUser() {
//   const chars = 'abcdefghijklmnopqrstuvwxyz';
//   const length = Math.floor(Math.random() * 6) + 5;
//   let brand = '';
//   for (let i = 0; i < length; i++) {
//     brand += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   const name = brand.charAt(0).toUpperCase() + brand.slice(1);
//   const email = `${brand}${Math.floor(Math.random() * 1000)}@${brand}.com`;
//   return { name, email };
// }

// describe('Identify once then randomly click nav-link anchors', () => {
//   const testUrl = 'https://qa-replay.netlify.app/';
//   const repeatCount = 100; // open the same URL multiple times

//   for (let run = 1; run <= repeatCount; run++) {
//     it(`Random nav-link click run #${run}`, () => {
//       cy.visit(testUrl);
//       cy.wait(5000);

//       // Identify once
//       cy.window().then((win) => {
//         const randomId = `user_${Math.floor(Math.random() * 100000)}`;
//         const { name, email } = generateRandomUser();
//         if (win.uzera && typeof win.uzera.identify === 'function') {
//           win.uzera.identify(randomId, { name, email });
//           win.console.log('uzera.identify executed', { id: randomId, name, email });
//         }
//       });
//       cy.wait(1000);

//       // Decide how many nav-links to click (5–6 or all)
//       cy.get('a.nav-link').then(($links) => {
//         const total = $links.length;
//         const clickCount =
//           Math.random() < 0.5 ? Math.floor(Math.random() * 2) + 5 : total;

//         // Crawl step by step
//         for (let i = 0; i < clickCount; i++) {
//           cy.get('a.nav-link').then(($freshLinks) => {
//             const randomIndex = Math.floor(Math.random() * $freshLinks.length);
//             // break the chain: click, then stop
//             cy.wrap($freshLinks[randomIndex]).click({ force: true });
//           });

//           // wait for navigation before next re-query
//           cy.wait(6000);
//         }
//       });

//       cy.then(() => {
//         cy.log(`Run #${run} completed`);
//       });
//     });
//   }
// });


//===================================================

// function generateRandomUser() {
//   const chars = 'abcdefghijklmnopqrstuvwxyz';
//   const length = Math.floor(Math.random() * 6) + 5;
//   let brand = '';
//   for (let i = 0; i < length; i++) {
//     brand += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   const name = brand.charAt(0).toUpperCase() + brand.slice(1);
//   const email = `${brand}${Math.floor(Math.random() * 1000)}@${brand}.com`;
//   return { name, email };
// }

// function randomExtraAction() {
//   const actionType = Math.floor(Math.random() * 3); // 0=hover, 1=rage, 2=dead

//   if (actionType === 0) {
//     // Random hover
//     cy.get('body *:visible').then(($els) => {
//       if ($els.length > 0) {
//         const randomIndex = Math.floor(Math.random() * $els.length);
//         cy.wrap($els[randomIndex]).trigger('mouseover');
//         cy.log('Performed random hover');
//       }
//     });
//   } else if (actionType === 1) {
//     // Rage click on content (not nav-links)
//     cy.get('body *:visible:not(a.nav-link)').then(($els) => {
//       if ($els.length > 0) {
//         const randomIndex = Math.floor(Math.random() * $els.length);
//         const target = $els[randomIndex];
//         // issue separate Cypress commands, not chained
//         cy.wrap(target).click({ force: true });
//         cy.wait(200);
//         cy.wrap(target).click({ force: true });
//         cy.wait(200);
//         cy.wrap(target).click({ force: true });
//         cy.wait(200);
//         cy.wrap(target).click({ force: true });
//         cy.wait(200);
//         cy.wrap(target).click({ force: true });
//         cy.wait(200);
//         cy.wrap(target).click({ force: true });
//         console.log('Performed rage click on content');
//       }
//     });
//   } else {
//     // Dead click (background)
//     cy.get('body').click('topLeft');
//     console.log('Performed dead click');
//   }
// }

// describe('Identify once then randomly click nav-link anchors with extra actions', () => {
//   const testUrl = 'https://qa-replay.netlify.app/';
//   const repeatCount = 2;

//   for (let run = 1; run <= repeatCount; run++) {
//     it(`Random nav-link click run #${run}`, () => {
//       cy.visit(testUrl);
//       cy.wait(5000);
//       // Identify once
//       cy.window().then((win) => {
//         const randomId = `user_${Math.floor(Math.random() * 100000)}`;
//         const { name, email } = generateRandomUser();
//         if (win.uzera && typeof win.uzera.identify === 'function') {
//           win.uzera.identify(randomId, { name, email });
//           win.console.log('uzera.identify executed', { id: randomId, name, email });
//         }
//       });

//       // Decide how many nav-links to click
//       cy.get('a.nav-link').then(($links) => {
//         const total = $links.length;
//         const clickCount =
//           Math.random() < 0.5 ? Math.floor(Math.random() * 2) + 5 : total;

//         // Recursive click function with extra actions
//         function clickRandomLink(count) {
//           if (count <= 0) return;

//           cy.get('a.nav-link').then(($freshLinks) => {
//             const randomIndex = Math.floor(Math.random() * $freshLinks.length);
//             cy.wrap($freshLinks[randomIndex]).click({ force: true });
//           });

//           // break chain: wait, then perform extra action
//           cy.wait(3000);
//           randomExtraAction();
//           cy.wait(5000);

//           // re-run with fresh query
//           clickRandomLink(count - 1);
//         }

//         clickRandomLink(clickCount);
//       });

//       cy.then(() => {
//         cy.log(`Run #${run} completed`);
//       });
//     });
//   }
// });


// Chaos configuration
const chaosConfig = {
  hoverCount: 10,
  hoverDelay: 100,
  rageClickCount: 6,
  rageClickDelay: 10,
  crawlCountMin: 2,
  crawlCountMax: 4,
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
      cy.wrap($body).trigger('mousemove', { clientX: posX, clientY: posY });
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
  cy.contains('button', 'GET Users', { timeout: 0 }).then(($btn) => {
    if ($btn.length > 0) {
      cy.wrap($btn).as('getUsersBtn');
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
        const clickCount =
          Math.random() < 0.5 ? Math.floor(Math.random() * 2) + 5 : total;
          console.log('clickCount',clickCount);
        // Crawl step by step
        for (let i = 0; i < clickCount; i++) {
          cy.get('a.nav-link').then(($freshLinks) => {
            const randomIndex = Math.floor(Math.random() * $freshLinks.length);
            // break the chain: click, then stop
            cy.wrap($freshLinks[randomIndex]).click({ force: true });
          });

          randomRapidHover();
          cy.wait(2000);
    
          performDeadClick();
          cy.wait(2000);

          // wait for navigation before next re-query
          cy.wait(6000);
        }
      });
}

describe('Chaos navigation with user identify and API rage click crawl', () => {
  const testUrl = 'https://qa-replay.netlify.app/';
  const repeatCount = 1;

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

      cy.wait(5000);

      // Click nav-link with text "API" or href containing "api"
      cy.get('a.nav-link', { timeout: 0 }).then(($links) => {
        const targetLink = [...$links].find(
          (el) =>
            el.innerText.toLowerCase().includes('api') ||
            (el.getAttribute('href') || '').toLowerCase().includes('api')
        );
        if (targetLink) {
          cy.wrap(targetLink).as('apiLink');
          cy.get('@apiLink').click({ force: true });
          cy.log('Clicked nav-link with "API"');
        } else {
          cy.log('No nav-link with "API" found');
        }
      });

      cy.wait(3000);

      // Perform chaos actions
      randomRapidHover();
      cy.wait(2000);

      performDeadClick();
      cy.wait(2000);

      performRageClickOnGetUsers();
      cy.wait(6000);

      // Crawl other nav-links randomly multiple times
      performRandomNavLinkCrawl();
      cy.wait(2000);

      cy.log(`Run #${run} completed`);
    });
  }
});









