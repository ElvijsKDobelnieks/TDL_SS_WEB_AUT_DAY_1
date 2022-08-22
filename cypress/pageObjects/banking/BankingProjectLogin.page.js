import Base from "../Base.page";

class BankingProjectLoginPage extends Base {
  static get url() {
    return "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login";
  }

  static get customerLoginButton() {
    return cy.get("[ng-click='customer()']");
  }

  static get userList() {
    return cy.get("#userSelect");
  }

  static get loginButton() {
    return cy.get(".btn-default");
  }

  static get bankManagerLogin() {
    return cy.get("[ng-click='manager()']");
  }
}

export default BankingProjectLoginPage;
