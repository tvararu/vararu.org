describe("Basic test", () => {
  it("home page should show contact info", () => {
    cy.visit("/");

    cy.contains("Email").should("exist");
  });
});
