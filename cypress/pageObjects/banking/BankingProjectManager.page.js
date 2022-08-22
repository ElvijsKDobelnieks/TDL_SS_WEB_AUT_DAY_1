import Base from "../Base.page";
import BankingProjectAccountPage from "./BankingProjectAccount.page";

class BankingProjectManagerPage extends Base {
  static get url() {
    return "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager";
  }

  static get addCustomer() {
    return cy.get("[ng-click='addCust()']");
  }
}

export default BankingProjectManagerPage;
