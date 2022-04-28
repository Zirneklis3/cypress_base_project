import BasePage from "./basePage";

class SeletablesPage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get firstSelectable() {
    return cy.get("#verticalListContainer > li:nth-child(1)");
  }

  static get secondSelectable() {
    return cy.get("#verticalListContainer > li:nth-child(2)");
  }

  static get thirdSelectable() {
    return cy.get("#verticalListContainer > li:nth-child(3)");
  }

  static get fourthSelectable() {
    return cy.get("#verticalListContainer > li:nth-child(4)");
  }

  static get navGrid() {
    return cy.get("#demo-tab-grid");
  }

  static get oneSelectable() {
    return cy.get("#row1 > li:nth-child(1)");
  }

  static get twoSelectable() {
    return cy.get("#row1 > li:nth-child(2)");
  }
  static get threeSelectable() {
    return cy.get("#row1 > li:nth-child(3)");
  }
  static get fourSelectable() {
    return cy.get("#row2 > li:nth-child(1)");
  }
  static get fiveSelectable() {
    return cy.get("#row2 > li:nth-child(2)");
  }
  static get sixSelectable() {
    return cy.get("#row2 > li:nth-child(3)");
  }
  static get sevenSelectable() {
    return cy.get("#row3 > li:nth-child(1)");
  }
  static get eightSelectable() {
    return cy.get("#row3 > li:nth-child(2)");
  }
  static get nineSelectable() {
    return cy.get("#row3 > li:nth-child(3)");
  }
}

export default SeletablesPage;
