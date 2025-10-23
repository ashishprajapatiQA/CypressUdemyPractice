import 'cypress-iframe';
import "cypress-real-events";

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop')) {
        return false; // prevent Cypress from failing the test
    }
});
describe('ProductResponse', () => {


    // beforeEach(() => {
    //     // cy.clearCookies();
    //     // cy.clearLocalStorage();
    //     // cy.clearAllSessionStorage();
    //     // cy.window().then((win) => {
    //     //     win.sessionStorage.clear();
    //     //     if (win.indexedDB) {
    //     //         win.indexedDB.databases().then((dbs) => {
    //     //             dbs.forEach((db) => win.indexedDB.deleteDatabase(db.name));
    //     //         });
    //     //     }
    //     // });
    //     cy.clearCookies();
    //     cy.clearLocalStorage();
    //     cy.window().then(win => win.sessionStorage.clear());
    // });

    for (let i = 1; i <= 1; i++) {

        // it('DemoX form and clicks hotspots', () => {
        //     // Visit the URL
        //     cy.visit('https://app.uzera.com/demoX/JS0A9XT00U/5ff617ab-0699-448f-aa58-9b245e26047b/share',{
        //         onBeforeLoad(win) {
        //             win.localStorage.clear();
        //             win.sessionStorage.clear();
        //         }
        //     });
        //     cy.wait(5000);

        //     // Generate random name & email
        //     const randomName = `User${Math.floor(Math.random() * 10000)}`;
        //     const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;

        //     // Fill name field
        //     cy.get('#\\:r3\\:').type(randomName);
        //     cy.wait(2000);

        //     // Fill email field
        //     cy.get('#\\:r5\\:').type(randomEmail);
        //     cy.wait(2000);

        //     // Click continue button
        //     cy.get(
        //         '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > ' +
        //         'div > div.MuiBox-root.css-15qx0d1 > div > div > div.MuiStack-root.css-gfhfdc > button'
        //     ).click();
        //     cy.wait(4000);

        //     // Hotspot clicks
        //     const hotspotSelectors = [
        //         '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > div.MuiBox-root.css-3al35z > div.DemoxScript_gs-tooltip-Wrapper__lxSIu.DemoxScript_animation-view__sKxhM.MuiBox-root.css-zbb78r > div > svg',
        //         '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > div > div.DemoxScript_gs-tooltip-Wrapper__lxSIu.DemoxScript_animation-view__sKxhM.MuiBox-root.css-1cieebd > div > svg',
        //         '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > div > div.DemoxScript_gs-tooltip-Wrapper__lxSIu.DemoxScript_animation-view__sKxhM.MuiBox-root.css-1hs1t6f > div > svg',
        //         '#ul-demox-embed > div > div > div > div > div > div.MuiBox-root.css-1js65af > div > div.DemoxScript_gs-tooltip-Wrapper__lxSIu.DemoxScript_animation-view__sKxhM.MuiBox-root.css-zaksfz > div > svg'
        //     ];

        //     hotspotSelectors.forEach((selector) => {
        //         cy.get(selector).click({ force: true });
        //         cy.wait(4000);
        //     });

        // });

        it('Anonymous User who complete everything', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/', {
                onBeforeLoad(win) {
                    win.localStorage.clear();
                    win.sessionStorage.clear();
                }
            }).wait(5000);

            // Load iframe (change selector as per iframe on page)
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#modal-body-main > div.modal-body > div:nth-child(2) > div:nth-child(5) > button:nth-child(1)') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#main-tooltip-body > div.gs-tooltip-modal-content > div.tooltip-body > div > div:nth-child(3) > button:nth-child(2)')
                .should('be.visible').click(); // Replace with actual element inside iframe

            cy.wait(5000);
            cy.frameLoaded('#ul-beacon-step-86e3f042-a2c1-4731-814b-5c001ac3402f');

            cy.iframe('#ul-beacon-step-86e3f042-a2c1-4731-814b-5c001ac3402f').should('be.visible')
                .find('span')
                .should('be.visible', setTimeout)
                .realClick().click();

            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#main-tooltip-body > div.gs-tooltip-modal-content > div.tooltip-body > div > div:nth-child(3) > button:nth-child(2)')
                .should('be.visible').click(); // Replace with actual element inside iframe


            cy.wait(5000); // short wait before next iteration


            //checklist

            cy.window().then((win) => {
                cy.stub(win, 'open').callsFake(() => { });
            });
            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_deda44ae-9b9d-4ed1-9a04-12486f8d6050') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_ff36bdb4-41c7-4d7c-b678-805c823d23f9') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_900ab3fe-c245-4b2a-9823-20070ce4e428') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);


            //survey
            cy.visit('https://test-project-rouge-one.vercel.app/about.html');
            cy.wait(9000);
            const ids = [
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div.count-div.ul-nps-score-button',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(5) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(6) > div',

                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(8) > div.count-div.ul-nps-score-button',


                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(9) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(10) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(11) > div.count-div.ul-nps-score-button',
            ];

            // Pick random index
            const randomIndex = Math.floor(Math.random() * ids.length);
            const randomSelector = ids[randomIndex];

            cy.log(`🎯 Clicking:  ${randomIndex} : random element: ${randomSelector}`);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomSelector, { timeout: 10000 })
                .should('be.visible').click();

            cy.wait(5000);

            const likeID = [
                '#like',
                '#dislike'
            ];
            // Pick random index
            const randomLikeIndex = Math.floor(Math.random() * likeID.length);
            const randomLikeSelector = likeID[randomLikeIndex];

            cy.log(`🎯 Clicking like:  ${randomLikeIndex} : random element: ${randomLikeSelector}`);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomLikeSelector, { timeout: 10000 })
                .should('be.visible').click();


            function randomString(length) {
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return result;
            }

            const text150 = randomString(150);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('textarea')
                .first()
                .should('be.visible')
                .type(text150);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('#continue-button')
                .should('be.visible').click();

            cy.wait(5000);

            const CSAT = [
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(1) > svg',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(2) > svg',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(3) > svg',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(4) > svg',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(5) > svg'
            ];
            // Pick random index
            const randomCSATIndex = Math.floor(Math.random() * CSAT.length);
            const randomCSATSelector = CSAT[randomCSATIndex];

            cy.log(`🎯 Clicking CSAT:  ${randomCSATIndex} : random element: ${randomCSATSelector}`);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomCSATSelector, { timeout: 10000 })
                .should('be.visible').click();

            cy.wait(5000);

            const CES = [
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(1)',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(2)',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(3)',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(4)',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(5)'
            ];
            // Pick random index
            const randomCESIndex = Math.floor(Math.random() * CES.length);
            const randomCESSelector = CES[randomCESIndex];

            cy.log(`🎯 Clicking CES:  ${randomCESIndex} : random element: ${randomCESSelector}`);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomCESSelector, { timeout: 10000 })
                .should('be.visible').click();

            cy.wait(5000);

        });

        it('Anonymous User who dismiss In between', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/', {
                onBeforeLoad(win) {
                    win.localStorage.clear();
                    win.sessionStorage.clear();
                }
            }).wait(5000);

            // Load iframe (change selector as per iframe on page)
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#modal-body-main > div.modal-body > div:nth-child(2) > div:nth-child(5) > button:nth-child(1)') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#ul-product-tour-close-btn')
                .should('be.visible').click(); // Replace with actual element inside iframe
            cy.wait(5000);
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#dismiss-button')
                .should('be.visible').click(); // Replace with actual element inside iframe

            cy.wait(5000); // short wait before next iteration

            //checklist

            cy.window().then((win) => {
                cy.stub(win, 'open').callsFake(() => { });
            });

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_deda44ae-9b9d-4ed1-9a04-12486f8d6050') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_ff36bdb4-41c7-4d7c-b678-805c823d23f9') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist-dismiss-button') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#gs-checklist-confirm-btn') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);


            //survey
            cy.visit('https://test-project-rouge-one.vercel.app/about.html');
            cy.wait(9000);
            const ids = [
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div.count-div.ul-nps-score-button',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(5) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(6) > div',

                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(8) > div.count-div.ul-nps-score-button',


                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(9) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(10) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(11) > div.count-div.ul-nps-score-button',
            ];

            // Pick random index
            const randomIndex = Math.floor(Math.random() * ids.length);
            const randomSelector = ids[randomIndex];

            cy.log(`🎯 Clicking:  ${randomIndex} : random element: ${randomSelector}`);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomSelector, { timeout: 10000 })
                .should('be.visible').click();

            cy.wait(5000);

            const likeID = [
                '#like',
                '#dislike'
            ];
            // Pick random index
            const randomLikeIndex = Math.floor(Math.random() * likeID.length);
            const randomLikeSelector = likeID[randomLikeIndex];

            cy.log(`🎯 Clicking like:  ${randomLikeIndex} : random element: ${randomLikeSelector}`);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomLikeSelector, { timeout: 10000 })
                .should('be.visible').click();


            function randomString(length) {
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return result;
            }

            const text150 = randomString(150);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('textarea')
                .first()
                .should('be.visible')
                .type(text150);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('#continue-button')
                .should('be.visible').click();

            cy.wait(3000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('#ul-nps-custom-dismiss')
                .should('be.visible').click();
            cy.wait(1000);

        });

        it('Identify User who complete everything', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/', {
                onBeforeLoad(win) {
                    win.localStorage.clear();
                    win.sessionStorage.clear();
                }
            }).wait(6000);

            cy.window().then((win) => {
                // Generate random values
                const randomId = 'id' + Math.random().toString(36).substring(2, 10);
                const randomName = 'User' + Math.random().toString(36).substring(2, 6);
                const randomEmail = randomName.toLowerCase() + '@example.com';

                // Inject into uzera
                win.uzera("identify", {
                    id: randomId,
                    userData: {
                        name: randomName,
                        email: randomEmail
                    }
                });

                cy.log(`Injected user → ID: ${randomId} , Name: ${randomName} , Email: ${randomEmail}`);
            });


            // Load iframe (change selector as per iframe on page)
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#modal-body-main > div.modal-body > div:nth-child(2) > div:nth-child(5) > button:nth-child(1)') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#main-tooltip-body > div.gs-tooltip-modal-content > div.tooltip-body > div > div:nth-child(3) > button:nth-child(2)')
                .should('be.visible').click(); // Replace with actual element inside iframe

            cy.wait(5000);
            cy.frameLoaded('#ul-beacon-step-86e3f042-a2c1-4731-814b-5c001ac3402f');

            cy.iframe('#ul-beacon-step-86e3f042-a2c1-4731-814b-5c001ac3402f').should('be.visible')
                .find('span')
                .should('be.visible', setTimeout)
                .realClick().click();

            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#main-tooltip-body > div.gs-tooltip-modal-content > div.tooltip-body > div > div:nth-child(3) > button:nth-child(2)')
                .should('be.visible').click(); // Replace with actual element inside iframe


            cy.wait(5000); // short wait before next iteration


            //checklist

            cy.window().then((win) => {
                cy.stub(win, 'open').callsFake(() => { });
            });
            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_deda44ae-9b9d-4ed1-9a04-12486f8d6050') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_ff36bdb4-41c7-4d7c-b678-805c823d23f9') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_900ab3fe-c245-4b2a-9823-20070ce4e428') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);


            //survey
            cy.visit('https://test-project-rouge-one.vercel.app/about.html');
            cy.wait(9000);
            const ids = [
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div.count-div.ul-nps-score-button',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(5) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(6) > div',

                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(8) > div.count-div.ul-nps-score-button',


                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(9) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(10) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(11) > div.count-div.ul-nps-score-button',
            ];

            // Pick random index
            const randomIndex = Math.floor(Math.random() * ids.length);
            const randomSelector = ids[randomIndex];

            cy.log(`🎯 Clicking:  ${randomIndex} : random element: ${randomSelector}`);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomSelector, { timeout: 10000 })
                .should('be.visible').click();

            cy.wait(5000);

            const likeID = [
                '#like',
                '#dislike'
            ];
            // Pick random index
            const randomLikeIndex = Math.floor(Math.random() * likeID.length);
            const randomLikeSelector = likeID[randomLikeIndex];

            cy.log(`🎯 Clicking like:  ${randomLikeIndex} : random element: ${randomLikeSelector}`);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomLikeSelector, { timeout: 10000 })
                .should('be.visible').click();


            function randomString(length) {
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return result;
            }

            const text150 = randomString(150);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('textarea')
                .first()
                .should('be.visible')
                .type(text150);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('#continue-button')
                .should('be.visible').click();

            cy.wait(5000);

            const CSAT = [
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(1) > svg',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(2) > svg',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(3) > svg',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(4) > svg',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(5) > svg'
            ];
            // Pick random index
            const randomCSATIndex = Math.floor(Math.random() * CSAT.length);
            const randomCSATSelector = CSAT[randomCSATIndex];

            cy.log(`🎯 Clicking CSAT:  ${randomCSATIndex} : random element: ${randomCSATSelector}`);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomCSATSelector, { timeout: 10000 })
                .should('be.visible').click();

            cy.wait(5000);

            const CES = [
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(1)',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(2)',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(3)',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(4)',
                '#nps-container > div:nth-child(2) > div.template-preview-emoji--count > div:nth-child(5)'
            ];
            // Pick random index
            const randomCESIndex = Math.floor(Math.random() * CES.length);
            const randomCESSelector = CES[randomCESIndex];

            cy.log(`🎯 Clicking CES:  ${randomCESIndex} : random element: ${randomCESSelector}`);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomCESSelector, { timeout: 10000 })
                .should('be.visible').click();

            cy.wait(5000);

        });

        it('Identify User who dismiss In between', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/', {
                onBeforeLoad(win) {
                    win.localStorage.clear();
                    win.sessionStorage.clear();
                }
            }).wait(6000);

            cy.window().then((win) => {
                // Generate random values
                const randomId = 'id' + Math.random().toString(36).substring(2, 10);
                const randomName = 'User' + Math.random().toString(36).substring(2, 6);
                const randomEmail = randomName.toLowerCase() + '@example.com';

                // Inject into uzera
                win.uzera("identify", {
                    id: randomId,
                    userData: {
                        name: randomName,
                        email: randomEmail
                    }
                });

                cy.log(`Injected user → ID: ${randomId} , Name: ${randomName} , Email: ${randomEmail}`);
            });

            // Load iframe (change selector as per iframe on page)
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#modal-body-main > div.modal-body > div:nth-child(2) > div:nth-child(5) > button:nth-child(1)') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#ul-product-tour-close-btn')
                .should('be.visible').click(); // Replace with actual element inside iframe
            cy.wait(5000);
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#dismiss-button')
                .should('be.visible').click(); // Replace with actual element inside iframe

            cy.wait(5000); // short wait before next iteration

            //checklist

            cy.window().then((win) => {
                cy.stub(win, 'open').callsFake(() => { });
            });

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_deda44ae-9b9d-4ed1-9a04-12486f8d6050') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_ff36bdb4-41c7-4d7c-b678-805c823d23f9') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist-dismiss-button') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector
            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#gs-checklist-confirm-btn') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);


            //survey
            cy.visit('https://test-project-rouge-one.vercel.app/about.html');
            cy.wait(9000);
            const ids = [
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div.count-div.ul-nps-score-button',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(5) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(6) > div',

                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(8) > div.count-div.ul-nps-score-button',


                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(9) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(10) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(11) > div.count-div.ul-nps-score-button',
            ];

            // Pick random index
            const randomIndex = Math.floor(Math.random() * ids.length);
            const randomSelector = ids[randomIndex];

            cy.log(`🎯 Clicking:  ${randomIndex} : random element: ${randomSelector}`);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomSelector, { timeout: 10000 })
                .should('be.visible').click();

            cy.wait(5000);

            const likeID = [
                '#like',
                '#dislike'
            ];
            // Pick random index
            const randomLikeIndex = Math.floor(Math.random() * likeID.length);
            const randomLikeSelector = likeID[randomLikeIndex];

            cy.log(`🎯 Clicking like:  ${randomLikeIndex} : random element: ${randomLikeSelector}`);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomLikeSelector, { timeout: 10000 })
                .should('be.visible').click();


            function randomString(length) {
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return result;
            }

            const text150 = randomString(150);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('textarea')
                .first()
                .should('be.visible')
                .type(text150);

            cy.wait(2000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('#continue-button')
                .should('be.visible').click();

            cy.wait(3000);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find('#ul-nps-custom-dismiss')
                .should('be.visible').click();
            cy.wait(1000);

        });

        it('Anonymous User who Attend Product Tour - Partial ', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/', {
                onBeforeLoad(win) {
                    win.localStorage.clear();
                    win.sessionStorage.clear();
                }
            }).wait(5000);

            // Load iframe (change selector as per iframe on page)
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#modal-body-main > div.modal-body > div:nth-child(2) > div:nth-child(5) > button:nth-child(1)') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#main-tooltip-body > div.gs-tooltip-modal-content > div.tooltip-body > div > div:nth-child(3) > button:nth-child(2)')
                .should('be.visible').click(); // Replace with actual element inside iframe

            cy.wait(5000); // short wait before next iteration

        });

        it('Anonymous User who Attend Checklist - Partial ', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/', {
                onBeforeLoad(win) {
                    win.localStorage.clear();
                    win.sessionStorage.clear();
                }
            }).wait(5000);

            // Load iframe (change selector as per iframe on page)
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#ul-product-tour-close-btn') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#dismiss-button')
                .should('be.visible').click(); // Replace with actual element inside iframe


            //checklist Code

            cy.window().then((win) => {
                cy.stub(win, 'open').callsFake(() => { });
            });

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_deda44ae-9b9d-4ed1-9a04-12486f8d6050') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

        });

        it('Anonymous User who Attend Survey - Partial ', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/', {
                onBeforeLoad(win) {
                    win.localStorage.clear();
                    win.sessionStorage.clear();
                }
            }).wait(5000);

            // Load iframe (change selector as per iframe on page)
            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#ul-product-tour-close-btn') // Replace with actual element inside iframe
                .should('be.visible').click();
            cy.wait(5000);

            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#dismiss-button')
                .should('be.visible').click(); // Replace with actual element inside iframe


            //checklist Code

            cy.window().then((win) => {
                cy.stub(win, 'open').callsFake(() => { });
            });

            cy.frameLoaded('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d'); // If there are multiple, use a specific selector

            // Switch to iframe and click element
            cy.iframe('#ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d')
                .find('#checklist_item_deda44ae-9b9d-4ed1-9a04-12486f8d6050') // Replace with actual element inside iframe
                .should('be.visible').invoke('removeAttr', 'target').click();
            cy.wait(5000);

            //survey
            cy.visit('https://test-project-rouge-one.vercel.app/about.html');
            cy.wait(9000);
            const ids = [
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div.count-div.ul-nps-score-button',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(5) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(6) > div',

                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(8) > div.count-div.ul-nps-score-button',


                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(9) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(10) > div',
                '#nps-container > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(11) > div.count-div.ul-nps-score-button',
            ];

            // Pick random index
            const randomIndex = Math.floor(Math.random() * ids.length);
            const randomSelector = ids[randomIndex];

            cy.log(`🎯 Clicking:  ${randomIndex} : random element: ${randomSelector}`);

            cy.frameLoaded('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad'); // If there are multiple, use a specific selector
            cy.iframe('#ul-nps-00dd194c-57ed-498a-9832-733f2a1dd2ad')
                .find(randomSelector, { timeout: 10000 })
                .should('be.visible').click();

            cy.wait(2000);

        });

        it('Shareable Survey Automation Completes survey with random responses', () => {
          // Visit the URL
          cy.visit('https://feedback.uzera.com/feedback/JS0A9XT00U/0863baf8-d0c9-40b6-a0a7-9d888340c225');
          cy.wait(5000);

          // NPS score selectors
          const npsIds = [
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(1)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(2)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(3)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(4)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(5)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(6)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(7)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(8)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(9)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(10)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(11)'
          ];

          const yesNoIds = [
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-colorPrimary.gs-secondary-button.Survey_no-button__4CZPt.Survey_highlight-button__V4IcQ.undefined.css-1ujsas3',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > button:nth-child(1)'
          ];

          const csatIds = [
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(1) > svg',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(2) > svg',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(3) > svg',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(4) > svg',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(5) > svg'
          ];

          const cesIds = [
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(1)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(2)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(3)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(4)',
            '#root > div > div > div > div.Survey_question-area__5f\\+qv > div > div.Survey_score-wrapper__ua7BA > div > div:nth-child(5)'
          ];

          function clickRandom(selectorList) {
            const randomIndex = Math.floor(Math.random() * selectorList.length);
            const randomSelector = selectorList[randomIndex];
            cy.log(`🎯 Clicking: ${randomIndex} : ${randomSelector}`);
            cy.get(randomSelector).should('be.visible').click({ force: true });
            cy.wait(3000);
          }

          // Perform clicks
          clickRandom(npsIds);
          clickRandom(yesNoIds);
          clickRandom(csatIds);
          clickRandom(cesIds);

        });

      



    }
});




