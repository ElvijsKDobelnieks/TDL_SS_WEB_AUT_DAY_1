import Base from "../Base.page";

class BankingProjectManagerListPage extends Base {
  static get url() {
    return "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/list";
  }

  static get searchField() {
    return cy.get("[placeholder='Search Customer']");
  }

  static getRow(itemName) {
    return this.rows.contains(itemName).parent();
  }

  static deleteUser(userName) {
    return this.rows
      .contains(userName)
      .parent()
      .find("[ng-click='deleteCust(cust)']")
      .click();
  }
}

export default BankingProjectManagerListPage;
