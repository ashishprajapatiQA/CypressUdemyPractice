class ProductPage{

    pageValidation(){
        cy.contains("Shop Name").should('be.visible')
    }
    verifyCardLimit(){
        cy.get('app-card').should('have.length', 4)
    }
}