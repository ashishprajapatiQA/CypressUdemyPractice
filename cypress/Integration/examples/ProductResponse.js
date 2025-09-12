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
    for (let i = 1; i <= 10; i++) {
        it('Product Tour', () => {

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
    }
});




