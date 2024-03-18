describe('MD1', function() {
    it('MD1', function() {
      cy.visit('https://demoqa.com/selectable')
      cy.contains('Grid').click()
      cy.get('#gridContainer #row1 .list-group-item-action').eq(1).click()
      cy.get('#gridContainer #row2 .list-group-item-action').eq(0).click()
      cy.get('#gridContainer #row2 .list-group-item-action').eq(2).click()
      cy.get('#gridContainer #row3 .list-group-item-action').eq(1).click()
      cy.get('#gridContainer #row1 .list-group-item-action').eq(0).should('not.have.class', 'active')
      cy.get('#gridContainer #row1 .list-group-item-action').eq(2).should('not.have.class', 'active')
      cy.get('#gridContainer #row2 .list-group-item-action').eq(1).should('not.have.class', 'active')
      cy.get('#gridContainer #row3 .list-group-item-action').eq(0).should('not.have.class', 'active')
      cy.get('#gridContainer #row3 .list-group-item-action').eq(2).should('not.have.class', 'active')
    })
  })
  