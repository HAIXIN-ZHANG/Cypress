/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
	it('My FirstTest case', () => {
		//Check boxes
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

		cy.get('#opentab').then((el) => {
			const url = el.prop('href')
			// domain limitation
			cy.visit(url)
		})
	})
})
