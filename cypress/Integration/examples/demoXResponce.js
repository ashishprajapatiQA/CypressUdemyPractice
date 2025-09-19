import 'cypress-iframe';
import "cypress-real-events";


Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop')) {
        return false; // prevent Cypress from failing the test
    }
});




describe('DemoXResponce', () => {

    const iterations = 2; // how many times you want to repeat

    for (let i = 1; i <= iterations; i++) {
        it(`Iteration ${i} - Open fresh session`, () => {

            Cypress.Commands.add('resetBrowserState', () => {
                cy.clearCookies();
                cy.clearLocalStorage();

                cy.window().then((win) => {
                    // Clear sessionStorage
                    win.sessionStorage.clear();

                    // Clear service workers
                    if (win.navigator && win.navigator.serviceWorker) {
                        win.navigator.serviceWorker.getRegistrations().then((registrations) => {
                            registrations.forEach((reg) => reg.unregister());
                        });
                    }

                    // Clear caches (used by some tracking SDKs)
                    if (win.caches) {
                        win.caches.keys().then((keys) => {
                            keys.forEach((key) => win.caches.delete(key));
                        });
                    }

                    // Clear IndexedDB
                    indexedDB.databases().then((dbs) => {
                        dbs.forEach((db) => {
                            indexedDB.deleteDatabase(db.name);
                        });
                    });
                });
            }); // ensures every run is "fresh"



            cy.visit('https://app.uzera.com/demoX/JS0A9XT00U/5ff617ab-0699-448f-aa58-9b245e26047b/share');
            cy.wait(5000);

            // Generate random name & email
            const randomName = `User${Math.floor(Math.random() * 10000)}`;
            const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;

            // Fill name field
            cy.get('#\\:r3\\:').type(randomName);
            cy.wait(2000);

            // Fill email field
            cy.get('#\\:r5\\:').type(randomEmail);
            cy.wait(2000);

            // Click continue button
            cy.get(
                '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > ' +
                'div > div.MuiBox-root.css-15qx0d1 > div > div > div.MuiStack-root.css-gfhfdc > button'
            ).click();
            cy.wait(4000);

            // Hotspot clicks
            const hotspotSelectors = [
                '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > div.MuiBox-root.css-3al35z > div.DemoxScript_gs-tooltip-Wrapper__lxSIu.DemoxScript_animation-view__sKxhM.MuiBox-root.css-zbb78r > div > svg',
                '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > div > div.DemoxScript_gs-tooltip-Wrapper__lxSIu.DemoxScript_animation-view__sKxhM.MuiBox-root.css-1cieebd > div > svg',
                '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > div > div.DemoxScript_gs-tooltip-Wrapper__lxSIu.DemoxScript_animation-view__sKxhM.MuiBox-root.css-1hs1t6f > div > svg',
                '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > div > div.DemoxScript_gs-tooltip-Wrapper__lxSIu.DemoxScript_animation-view__sKxhM.MuiBox-root.css-zaksfz > div > svg'
            ];

            hotspotSelectors.forEach((selector) => {
                cy.get(selector).click({ force: true });
                cy.wait(4000);
            });
            
        });
    }
});




