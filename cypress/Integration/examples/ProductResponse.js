import 'cypress-iframe';
import "cypress-real-events";

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop')) {
        return false; // prevent Cypress from failing the test
    }
});
describe('ProductResponse', () => {


    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    for (let i = 1; i <= 1; i++) {
        it('Product Tour All steps', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/').wait(5000);

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

            cy.frameLoaded('#ul-beacon-step-86e3f042-a2c1-4731-814b-5c001ac3402f');
            cy.wait(5000);
            cy.iframe('#ul-beacon-step-86e3f042-a2c1-4731-814b-5c001ac3402f').should('be.visible')
                .find('span')
                .should('be.visible', setTimeout)
                .realClick().click();

            cy.frameLoaded('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba'); // If there are multiple, use a specific selector
            cy.iframe('#ul-product-tour-580fcd04-ff7f-4fed-b87f-c6af9ac6f8ba')
                .find('#main-tooltip-body > div.gs-tooltip-modal-content > div.tooltip-body > div > div:nth-child(3) > button:nth-child(2)')
                .should('be.visible').click(); // Replace with actual element inside iframe

            
            cy.wait(5000); // short wait before next iteration

        });
        it('Product Tour partial 3/1', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/').wait(5000);

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
                cy.stub(win, 'open').callsFake(() => {}); 
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

                
                

        });
        it('Product Tour All steps 3/2', () => {

            // Visit the URL
            cy.visit('https://test-project-rouge-one.vercel.app/').wait(5000);

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


       // #ul-checklist-7ce498d5-5efb-48bd-924b-b9f27457161d
    }
});




