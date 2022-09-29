describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/sepatu')

      //Klik Tambah Barang
      cy.get('.card-header > .btn-warning').click()

      //Masuk Tambah Barang Page
      cy.get('.card-header').contains('Tambah Sepatu').and('be.visible');
      cy.get(':nth-child(2) > label').should('have.text', 'Brand');
      cy.get(':nth-child(3) > label').should('have.text', 'Warna');
      cy.get(':nth-child(4) > label').should('have.text', 'Ukuran');
      cy.get(':nth-child(5) > label').should('have.text', 'Harga');
      cy.get(':nth-child(6) > label').should('have.text', 'Gambar: ');
      cy.get('#myForm > .btn').should('have.text', 'Submit');

      //Mengisi data tambah page
      cy.get('#brand').type('SepatuTest')
      cy.get('#warna').type('SepatuTest')
      cy.get('#ukuran').type(42)
      cy.get('#harga').type(200000)
      cy.get('#gambar').selectFile('cypress/fixtures/images/1656227840.jpg')
      cy.get('#myForm > .btn').click()
    })
  })