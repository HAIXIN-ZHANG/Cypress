/// <reference types="Cypress" />

describe('My first test', () => {
	it('My first case', () => {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
		cy.get('.search-keyword').type('ca')
		cy.wait(2000)
		cy.get('.product').should('have.length', 5)
		cy.get('.product:visible').should('have.length', 4)

		// parent child chaining
		cy.get('.products').find('.product').should('have.length', 4)

		// .click()
		cy.get(':nth-child(3) > .product-action > button').click()
		// cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

		cy.get('.products')
			.find('.product')
			.each(($el, index, $list) => {
				const textVeg = $el.find('h4.product-name').text()
				if (textVeg.includes('Cashews')) {
					$el.find('button').click()
				}
			})

		// assert if logo text is correctly displayed
		cy.get('.brand').should('have.text', 'GREENKART')

		// promise
		cy.get('.brand').then((logoElement) => {
			cy.log(logoElement.text())
		})

		// .as()
		cy.get('.products').as('productLocator')
		cy.get('@productLocator').find('.product').should('have.length', 4)

		// log different
		cy.log('this is cy.log')
		console.log('this is console.log')
	})
	// it('My second case', () => {})
})
