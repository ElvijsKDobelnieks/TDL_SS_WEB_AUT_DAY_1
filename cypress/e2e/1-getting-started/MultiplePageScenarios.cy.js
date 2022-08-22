import BankingProjectLoginPage from "../../pageObjects/banking/BankingProjectLogin.page";
import ReactShoppingCartPage from "../../pageObjects/ReactShoppingCart.page";
import BankingProjectAccountPage from "../../pageObjects/banking/BankingProjectAccount.page";
import BankingProjectTransactionsPage from "../../pageObjects/banking/BankingProjectTransactions.page";
import BankingProjectManagerPage from "../../pageObjects/banking/BankingProjectManager.page";
import BankingProjectManagerAddCustomerPage from "../../pageObjects/banking/BankingProjectManagerAddCustomer.page";
import BankingProjectManagerListPage from "../../pageObjects/banking/BankingProjectManagerList.page";

describe("Examples", () => {
  context("React shopping cart page", () => {
    beforeEach(() => {
      ReactShoppingCartPage.visit();
    });

    it("Validate sizes - S", () => {
      ReactShoppingCartPage.sizesS.click({ force: true });
      ReactShoppingCartPage.productBox.should("have.length", 2);
      ReactShoppingCartPage.productsFoundTitle.should(
        "contain",
        "2 Product(s) found"
      );
    });

    it("Validate sizes - XXL", () => {
      ReactShoppingCartPage.sizesXXL.click({ force: true });
      ReactShoppingCartPage.productBox.should("have.length", 4);
      ReactShoppingCartPage.productsFoundTitle.should(
        "contain",
        "4 Product(s) found"
      );
    });
  });

  context("Banking with user", () => {
    beforeEach(() => {
      BankingProjectLoginPage.visit();
      BankingProjectLoginPage.customerLoginButton.click();
      BankingProjectLoginPage.userList.select("Hermoine Granger");
      BankingProjectLoginPage.loginButton.click();
    });

    it("Validate Login", () => {
      BankingProjectAccountPage.userTitle.should("contain", "Hermoine Granger");
    });

    it("Validate Transactions", () => {
      // Click transactions
      BankingProjectAccountPage.transactionsButton.click();
      // Create new page object BankingProjectTransactionsPage
      // Validate row length - 392
      BankingProjectTransactionsPage.rows.should("have.length", 392);
      // Click reset button
      BankingProjectTransactionsPage.resetButton.click();
      // Validate length - 0
      BankingProjectTransactionsPage.rows.should("have.length", 0);
    });

    it("Validate Deposits", () => {
      // Validate balance 5096
      BankingProjectAccountPage.balance.should("have.text", 5096);
      // Deposit - 1004
      BankingProjectAccountPage.depositButton.click();
      BankingProjectAccountPage.amountField.type(1004);
      BankingProjectAccountPage.submitButton.click();
      // Validate balance - 6100
      BankingProjectAccountPage.balance.should("have.text", 6100);
      // Validate message - "Deposit Successful"
      BankingProjectAccountPage.message.should(
        "have.text",
        "Deposit Successful"
      );
    });

    it("Validate Withdrawl", () => {
      // Validate balance 5096
      BankingProjectAccountPage.balance.should("have.text", 5096);
      BankingProjectAccountPage.withdrawlButton.click();
      // Withdraw 4096
      BankingProjectAccountPage.amountField.type(4096);
      BankingProjectAccountPage.submitButton.click();
      // Validate balance 1000
      BankingProjectAccountPage.balance.should("have.text", 1000);
      // Validate message - "Transaction successful"
      BankingProjectAccountPage.message.should(
        "have.text",
        "Transaction successful"
      );
    });
  });

  context("Banking with manager", () => {
    beforeEach(() => {
      BankingProjectLoginPage.visit();
    });

    it("Add customer", () => {
      // Click Bank Manager Login
      BankingProjectLoginPage.bankManagerLogin.click();
      // Create a new Page Object
      // BankingProjectManagerPage
      // Click Add Customer
      BankingProjectManagerPage.addCustomer.click();
      // Input - Donald, Trump, DD6 9BN
      BankingProjectManagerAddCustomerPage.firstNameField.type("Donald");
      BankingProjectManagerAddCustomerPage.lastNameField.type("Trump");
      BankingProjectManagerAddCustomerPage.postalCodeField.type("DV 67253");
      BankingProjectManagerAddCustomerPage.submitButton.click();
      // Click Customers
      BankingProjectManagerAddCustomerPage.customersButton.click();
      // Click Add customer
      // BankingProjectManagerListPage
      // BankingProjectManagerListPage
      // Search for Donald
      BankingProjectManagerListPage.searchField.type("Donald");
      BankingProjectManagerListPage.rows.should("contain", "Donald");
      BankingProjectManagerListPage.rows.should("contain", "Trump");
      // BankingProjectManagerListPage.getRow("Donald").should(
      //   "contain",
      //   "Donald Trump"
      // );
      // Validate that the row with Donald Trump is visible
    });

    it("Delete all customers", () => {
      BankingProjectLoginPage.bankManagerLogin.click();
      BankingProjectManagerAddCustomerPage.customersButton.click();
      BankingProjectManagerListPage.rows.should("have.length", 5);
      ["Hermoine", "Harry", "Ron", "Albus", "Neville"].forEach((name) => {
        BankingProjectManagerListPage.deleteUser(name);
      });
      BankingProjectManagerListPage.rows.should("have.length", 0);
    });
  });
});
