import Base from "../Base.page";
import BankingProjectManagerPage from "./BankingProjectManager.page";

class BankingProjectManagerAddCustomerPage extends Base {
  static get url() {
    return "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust";
  }

  static get firstNameField() {
    return cy.get("[placeholder='First Name']");
  }

  static get lastNameField() {
    return cy.get("[placeholder='Last Name']");
  }

  static get postalCodeField() {
    return cy.get("[placeholder='Post Code']");
  }

  static get customersButton() {
    return cy.get("[ng-click='showCust()']");
  }
}

export default BankingProjectManagerAddCustomerPage;
