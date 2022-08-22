class Base {
  static get url() {
    return "";
  }

  static visit() {
    cy.visit(this.url);
  }

  static get submitButton() {
    return cy.get("button[class*='btn-default']");
  }

  static get rows() {
    return cy.get("tbody > tr");
  }
}

export default Base;
