describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/sepatu')

    // Klik edit
    cy.get(':nth-child(1) > .d-flex > .btn-warning').click();

    //Masuk Edit page
    cy.get('.card-header').contains('Edit Sepatu').and('be.visible')
    cy.get(':nth-child(4) > label').should('have.text', 'brand');
    cy.get(':nth-child(5) > label').should('have.text', 'Ukuran');
    cy.get(':nth-child(6) > label').should('have.text', 'Warna');
    cy.get(':nth-child(7) > label').should('have.text', 'Harga');
    cy.get(':nth-child(8) > label').should('have.text', 'Gambar: ');
    cy.get('#myForm > .btn').should('have.text', '');

    //Proses Edit
    cy.get('#brand').clear()
    cy.get('#brand').type('SepatuEdit')
    cy.get('#ukuran').clear()
    cy.get('#ukuran').type(10)
    cy.get('#harga').clear()
    cy.get('#harga').type(100000)
    cy.get('#gambar').selectFile('cypress/fixtures/images/1656227972.jpg')
    cy.get('#myForm > .btn').click()

    })
  })