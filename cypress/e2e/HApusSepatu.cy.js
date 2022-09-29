describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/sepatu')
      
      //klik hapus
      //cy.get(':nth-child(1) > .d-flex > form > .btn').click()
      cy.get(':nth-child(4) > .d-flex > form > .btn').click();
    })
  })