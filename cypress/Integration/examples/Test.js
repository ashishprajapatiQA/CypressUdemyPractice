// <reference type="Cypress" />

describe('Search Test Suit', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    });

    it('should search for a verify results', () => {

        cy.get('.search-keyword').type('ca'); // searching in search box 
        cy.wait(2000);
        cy.get('.product').should('have.length', 5); // assertion for find all products on Dom 
        cy.get('.product:visible').should('have.length', 4); // assertion for find products which are visiable on Dom

        cy.get('.products').as('productLocation'); //alias name
        cy.get('@productLocation').find('.product').should('have.length', 4); 
        cy.wait(2000);
        cy.get('@productLocation').find('.product').eq(2).contains('ADD TO CART').click(); // direct click on 3rd product 

        // using loop found perticular block & click on button (parent child concept) 
        cy.get('@productLocation').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text();
            cy.log(textVeg, $el, index, $list);
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        })

        // assertion
        cy.get('.brand').should('have.text', 'GREENKART');

        //get logo text using then because of non cypress syntax
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text());
        })

    });
});