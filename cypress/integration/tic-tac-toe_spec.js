/// <reference types="cypress" />

describe('Navigate to Tic-Tac_Toe App', () => {
    it('should navigate to the tic-tac-toe app', () => {
        cy.visit('http://localhost:3000/')
    })
})

describe('Find Title', () => {
    it('finds the content ""Tic-TacToe""', () => {
        cy.contains('"Tic-TacToe"')
    })
})

describe('Find Next player text', () => {
    it('finds the content "Next player:"', () => {
        cy.contains('Next player: X')
    })
})

describe('Go to game start Button Test', () => {
    it('clicks the "Go to game start"', () => {
        cy.contains('Go to game start').click()
    })
})

describe('Reset Button Test', () => {
    it('clicks the "resetButton"', () => {
        cy.get('[data-cy=resetButton]').click()
    })
})

describe('Gameboard Button Test', () => {
    it('clicks "Gameboard Square" and checks text changes', () => {
        cy.get('[data-cy=square]').click()
        cy.contains('Next player: O')
        cy.contains('Move number # 1')
        cy.contains('Go to game start').click()
    })
})

describe('Gameboard All Button Test', () => {
    it('clicks all squares', () => {
        cy.get('[data-cy="squareOne"]').click()
            .contains('X')
        cy.contains('Next player: O')
        cy.contains('Move number # 1')
        cy.get('[data-cy="squareTwo"]').click()
        cy.contains('O')
        cy.get('[data-cy="squareThree"]').click()
        cy.get('[data-cy="squareFour"]').click()
        cy.get('[data-cy="squareFive"]').click()
        cy.get('[data-cy="squareSix"]').click()
        cy.get('[data-cy="squareSeven"]').click()
        cy.get('[data-cy="squareEight"]').click()
        cy.get('[data-cy="squareNine"]').click()
    })
})

describe('Move # 1 Button Test', () => {
    it('clicks the "gameCount"', () => {
        cy.get('[data-cy="gameCount1"]').click()
    })
})