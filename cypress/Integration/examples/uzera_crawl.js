// // cypress/e2e/uzera_crawl.cy.js

// // Utility: generate random "brand-like" name and email
// function generateRandomUser() {
//     const chars = 'abcdefghijklmnopqrstuvwxyz';
//     const length = Math.floor(Math.random() * 6) + 5; // 5–10 chars
//     let brand = '';
//     for (let i = 0; i < length; i++) {
//       brand += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
  
//     // Capitalize first letter to look like a name
//     const name = brand.charAt(0).toUpperCase() + brand.slice(1);
  
//     // Email based on brand-like name
//     const email = `${brand}${Math.floor(Math.random() * 1000)}@${brand}.com`;
  
//     return { name, email };
//   }
  
//   // Utility: shuffle array
//   function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
//   }
  
//   describe('Identify once then crawl site randomly', () => {
//     const testUrl = 'https://qa-replay.netlify.app/';
//     const repeatCount = 1; // how many times to repeat full crawl
  
//     for (let run = 1; run <= repeatCount; run++) {
//       it(`Random crawl run #${run}`, () => {
//         // Step 1: Visit base URL
//         cy.visit(testUrl);
  
//         // Step 2: Short wait before executing anything else
//         cy.wait(1000);
  
//         // Step 3: Execute uzera.identify once with random brand-like name/email
//         cy.window().then((win) => {
//           const randomId = `user_${Math.floor(Math.random() * 100000)}`;
//           const { name, email } = generateRandomUser();
  
//           if (win.uzera && typeof win.uzera.identify === 'function') {
//             win.uzera.identify(randomId, { name, email });
//             win.console.log(`Run #${run}: uzera.identify executed`, {
//               id: randomId,
//               name,
//               email,
//             });
//           } else {
//             win.console.warn('uzera library not found on this page');
//           }
//         });
  
//         // Step 4: Crawl randomly
//         cy.get('a[href]').then(($links) => {
//           const internalLinks = $links
//             .toArray()
//             .map((el) => el.href)
//             .filter((href) => href.startsWith(testUrl));
  
//           // Shuffle links
//           const shuffled = shuffle(internalLinks);
  
//           // Decide how many pages to visit (5–6 or all)
//           const visitCount =
//             Math.random() < 0.5
//               ? Math.floor(Math.random() * 2) + 5 // 5–6
//               : shuffled.length; // all
  
//           const selected = shuffled.slice(0, visitCount);
  
//           selected.forEach((href, index) => {
//             // Small delay ≤1s
//             cy.wait(500);
  
//             cy.visit(href);
  
//             // Brief read time ≤1s
//             cy.wait(800);
//           });
//         });
  
//         // Step 5: Explicitly close iteration
//         cy.then(() => {
//           cy.log(`Run #${run} completed — closing iteration`);
//         });
//       });
//     }
//   });
  

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

// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }

// describe('Identify once then randomly click nav-link anchors', () => {
//   const testUrl = 'https://qa-replay.netlify.app/';

//   it('Random nav-link click crawl', () => {
//     cy.visit(testUrl);
//     cy.wait(1000);

//     // Identify once
//     cy.window().then((win) => {
//       const randomId = `user_${Math.floor(Math.random() * 100000)}`;
//       const { name, email } = generateRandomUser();
//       if (win.uzera && typeof win.uzera.identify === 'function') {
//         win.uzera.identify(randomId, { name, email });
//         win.console.log('uzera.identify executed', { id: randomId, name, email });
//       }
//     });

//     // Decide how many nav-links to click (5–6 or all)
//     cy.get('a.nav-link').then(($links) => {
//       const total = $links.length;
//       const clickCount =
//         Math.random() < 0.5 ? Math.floor(Math.random() * 2) + 5 : total;

//       // Crawl step by step
//       for (let i = 0; i < clickCount; i++) {
//         cy.get('a.nav-link').then(($freshLinks) => {
//           const randomIndex = Math.floor(Math.random() * $freshLinks.length);
//           cy.wrap($freshLinks[randomIndex]).click({ force: true });
//         });

//         // Wait for navigation
//         cy.wait(1000);
//       }
//     });

//     cy.then(() => {
//       cy.log('Random nav-link crawl completed');
//     });
//   });
// });


// cypress/e2e/uzera_crawl.cy.js

function generateRandomUser() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const length = Math.floor(Math.random() * 6) + 5;
  let brand = '';
  for (let i = 0; i < length; i++) {
    brand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const name = brand.charAt(0).toUpperCase() + brand.slice(1);
  const email = `${brand}${Math.floor(Math.random() * 1000)}@${brand}.com`;
  return { name, email };
}

describe('Identify once then randomly click nav-link anchors', () => {
  const testUrl = 'https://qa-replay.netlify.app/';
  const repeatCount = 100; // open the same URL multiple times

  for (let run = 1; run <= repeatCount; run++) {
    it(`Random nav-link click run #${run}`, () => {
      cy.visit(testUrl);
      cy.wait(5000);

      // Identify once
      cy.window().then((win) => {
        const randomId = `user_${Math.floor(Math.random() * 100000)}`;
        const { name, email } = generateRandomUser();
        if (win.uzera && typeof win.uzera.identify === 'function') {
          win.uzera.identify(randomId, { name, email });
          win.console.log('uzera.identify executed', { id: randomId, name, email });
        }
      });
      cy.wait(1000);

      // Decide how many nav-links to click (5–6 or all)
      cy.get('a.nav-link').then(($links) => {
        const total = $links.length;
        const clickCount =
          Math.random() < 0.5 ? Math.floor(Math.random() * 2) + 5 : total;

        // Crawl step by step
        for (let i = 0; i < clickCount; i++) {
          cy.get('a.nav-link').then(($freshLinks) => {
            const randomIndex = Math.floor(Math.random() * $freshLinks.length);
            // break the chain: click, then stop
            cy.wrap($freshLinks[randomIndex]).click({ force: true });
          });

          // wait for navigation before next re-query
          cy.wait(6000);
        }
      });

      cy.then(() => {
        cy.log(`Run #${run} completed`);
      });
    });
  }
});


