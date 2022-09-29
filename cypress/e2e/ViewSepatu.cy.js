describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/sepatu')

     //klik show
     cy.get(':nth-child(1) > .d-flex > .btn-primary').click();

     //Masuk Show page
     cy.get(':nth-child(1) > b').contains('Id').and('be.visible')
     cy.get('.list-group > :nth-child(2) > b').contains('Brand').and('be.visible')
     cy.get(':nth-child(3) > b').contains('Ukuran').and('be.visible')
     cy.get(':nth-child(4) > b').contains('Harga').and('be.visible')
     cy.get('.card > .btn').click()
    })
})