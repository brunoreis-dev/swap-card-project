/* eslint-disable no-undef */
describe("Card App Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Create Card", () => {
    cy.createCard();
    
    cy.contains("p", "NuBank", {timeout: 5000});
    cy.contains("p", "42348765****1234", {timeout: 5000});
  });

  it("Read Cards", () => {
    cy.createCard();

    cy.get("#card-list", {timeout: 5000}).should("be.visible");
  });

  it("Update Card", () => {
    cy.createCard();

    cy.get("#open-edit-card", {timeout: 5000}).eq(0).click();
    cy.get("input[name=alias]").eq(1).type(" Teste");
    cy.get("input[name=number]").eq(1).clear().type("9832742371263124");
    cy.get("#edit-card", {timeout: 5000}).click();
    cy.contains("p", "NuBank Teste", {timeout: 5000});
    cy.contains("p", "98327423****3124", {timeout: 5000});
  });

  it("Delete Card", () => {
    cy.createCard();
    
    cy.get("#open-delete-card", {timeout: 5000}).eq(0).click();
    cy.get("#delete-card", {timeout: 5000}).click();
    cy.contains("p", "No cards yet", {timeout: 5000}).should("be.visible");
  });
});
