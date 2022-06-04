/// <reference types="Cypress" />

describe("blog posts tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(200);
  });

  it("can displays latest posts in home page", () => {
    cy.get("h2").first().should("have.text", "Latest Posts");
    cy.get(".main-content")
      .children()
      .get("section.latest-posts")
      .children()
      .last()
      .children()
      .should("have.length", 3);
  });
});
