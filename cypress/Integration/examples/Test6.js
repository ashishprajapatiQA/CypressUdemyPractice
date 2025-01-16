/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('Mouse hover', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //  cy.get('div.mouse-hover-content').invoke('show') // visiable mode we use this with 
        cy.contains('Top').click({ force: true })  // invisiable mode we try to click using { force: true }
        cy.url().should('include','top')


    })


})