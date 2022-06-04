/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
    cy.wait(100);
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
});
