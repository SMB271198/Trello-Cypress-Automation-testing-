describe("Login functionallity", () => {
  // Login to Trello.
  it.only("Login to the Trello", () => {
    cy.visit("https://trello.com/home");
    cy.get('[class="Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr"]').click();
    cy.get('[placeholder="Enter email"]').type("snehalbangar98@gmail.com");
    cy.get("#login").click();
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.origin("https://id.atlassian.com/login", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.get("#password").type("Snehal@1998");
      cy.get("#login-submit").click();
    });
    // To create A board
    cy.get('[class="board-tile mod-add"]>p>span').click();
    cy.get('[type="text"]').type("BOARD_1");
    cy.get('[data-testid="create-board-submit-button"]').type("{enter}");

    // To create a list A and list B
    cy.get('[class="open-add-list js-open-add-list"]>span').click();
    cy.get('[class="list-name-input"]').type("A");
    cy.get('[value="Add list"]').click({ force: true });
    cy.get('[class="list-name-input"]').type("B");
    cy.get('[value="Add list"]').click({ force: true });
    // To create a Card
    cy.wait(1000);
    cy.get('[class="icon-sm icon-add"]').eq(3).click({ force: true });
    cy.wait(3000);
    cy.get('[class="list-card-composer-textarea js-card-title"]').type(
      "CARD_1"
    );
    cy.wait(5000);
    cy.get('[value="Add card"]').click({ force: true });

    // Drag and Drop the created card in list B

    cy.get(".list-card-title").trigger("mousedown", { which: 1 });

    cy.get('[class="list-header-target js-editing-target"]')
      .last()
      .trigger("mousemove")
      .trigger("mouseup");

    // Logout from the Site
    cy.get('[class="OUdAuicP657Tka"]').click();
    cy.contains("Log out").click();
    cy.wait(2000);
    cy.get('[data-testid="logout-button"]').click({ force: true });
  });
});
