/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
	before(() => {})
	it('My FirstTest case', () => {
		cy.visit('https://rahulshettyacademy.com/angularpractice/')

		cy.get('form input.form-control:nth-child(1)').type('Bob')
		cy.get('select').select('Female')
	})
})
