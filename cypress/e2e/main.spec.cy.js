describe('template spec', () => {

  const selectors = {
    publishButton: '[data-qa="publish-button"]',
    commentBox: '[data-qa="comment-text"]',
  }


  it('passes', () => {
    cy.visit('localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').first().type('Test 123')
    cy.get(selectors.publishButton).first().click()
    cy.get(selectors.commentBox).contains('Test 123')
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === 'Test 123') {
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })
})