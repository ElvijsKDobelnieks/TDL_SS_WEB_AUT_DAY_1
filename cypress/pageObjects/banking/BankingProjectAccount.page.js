import Base from "../Base.page";

class BankingProjectAccountPage extends Base {
  static url() {
    return "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account";
  }

  static get userTitle() {
    return cy.get(".fontBig");
  }

  static get transactionsButton() {
    return cy.get("[ng-class='btnClass1']");
  }

  static get accInfoValues() {
    return cy.get("[ng-hide='noAccount'] [class='ng-binding']");
  }

  static get balance() {
    return cy.get('div[class="center"]>strong:nth-child(2)');
  }

  static get depositButton() {
    return cy.get("button[ng-click='deposit()']");
  }

  static get amountField() {
    return cy.get("input[placeholder='amount']");
  }

  static get message() {
    return cy.get(".error");
  }

  static get withdrawlButton() {
    return cy.get("[ng-click='withdrawl()']");
  }
}

export default BankingProjectAccountPage;
