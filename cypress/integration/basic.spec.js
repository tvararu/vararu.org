describe("Basic test", () => {
  it("home page should show contact info", () => {
    cy.visit("/");

    cy.contains("Email").should("exist");
  });

  it("should allow navigating to cv", () => {
    cy.contains("cv").click();

    cy.contains("Experience").should("exist");
  });
});
