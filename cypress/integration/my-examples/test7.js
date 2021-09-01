/// <reference types="Cypress" />

describe('My Second Test Suite', function () {
	it('My FirstTest case', function () {
		//Check boxes
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

		cy.get('#opentab').then((el) => {
			const url = el.prop('href')
			// domain limitation
			cy.visit(url)
		})
	})
})
