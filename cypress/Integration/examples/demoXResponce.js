import 'cypress-iframe';
import "cypress-real-events";

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop')) {
        return false; // prevent Cypress from failing the test
    }
});
describe('DemoXResponce', () => {


    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then(win => win.sessionStorage.clear());
    });

    for (let i = 1; i <= 3; i++) {

            it('DemoX shareble link', () => {
            // Visit the URL
            cy.visit('https://app.uzera.com/demoX/JS0A9XT00U/5ff617ab-0699-448f-aa58-9b245e26047b/share').wait(10000);
            
            

        });

    }
});




