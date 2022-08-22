import Base from "../Base.page";

class BankingProjectTransactionsPage extends Base {
  static get url() {
    return "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/listTx";
  }

  static get resetButton() {
    return cy.get("button[ng-click='reset()']");
  }
}

export default BankingProjectTransactionsPage;
