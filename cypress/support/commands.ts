/* eslint-disable no-undef */

Cypress.Commands.add("createCard", () => {
  cy.get("#add-new-card", {timeout: 5000}).click();
  cy.get("input[name=alias]").eq(0).type("NuBank");
  cy.get("input[name=holder]").eq(0).type("Bruno Reis");
  cy.get("input[name=number]").eq(0).type("4234876509861234");
  cy.get("input[name=expirationDate]").eq(0).type("12/2030");
  cy.get("input[name=cvc]").eq(0).type("123");
  cy.get("#add-card", {timeout: 5000}).click();
});
