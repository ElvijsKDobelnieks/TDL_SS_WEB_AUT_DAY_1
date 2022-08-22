import Base from "./Base.page";

class ReactShoppingCartPage extends Base {
  static get url() {
    return "https://react-shopping-cart-67954.firebaseapp.com/";
  }

  static get sizesS() {
    return cy.get("input[value='S']");
  }

  static get productBox() {
    return cy.get("[tabindex='1']");
  }

  static get productsFoundTitle() {
    return cy.get("main > p");
  }

  static get sizesXXL() {
    return cy.get("[value='XXL']");
  }
}

export default ReactShoppingCartPage;
