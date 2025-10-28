describe('End to end ecommerce test', () => {

    before(function () {
        // runs once before all tests in this block
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.log(data)
        })
    })

    it("submit order", function () {

        // const productName = "Nokia Edge"
        const productName = this.data.productName
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/")

        // cy.get("#username").type("rahulshettyacademy")
        // cy.get("#password").type("learning")

        cy.get("#username").type(this.data.username)
        cy.get("#password").type(this.data.password)

        cy.contains("Sign In").click()
        cy.contains("Shop Name").should('be.visible')
        cy.get('app-card').should('have.length', 4)
        cy.get('app-card').filter(`:contains("${productName}")`).then(
            $element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('button', 'Add').click()
            }
        )
        cy.get('app-card').eq(0).contains('button', 'Add').click()
        cy.contains('a', 'Checkout').click()
        let sum = 0
        cy.get('tr td:nth-child(4) strong').each(
            $element1 => {
                const amount = Number($element1.text().split(" ")[1].trim())  // took value after space so only fetch number value 
                sum = sum + amount // 65000 + 100000
            }
        ).then(function () {
            expect(sum).lessThan(200000)
        })
        cy.contains('button', 'Checkout').click()
        cy.get('#country').type("India")
        cy.get(".suggestions ul li a", { timeout: 10000 }).click()
        cy.get('.checkbox').click()
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert-success').should('contain', 'Success')
    })
})