import base_PO from "./base_PO";
import selectors from "../selectors";
import data from "../data";

class login_PO extends base_PO {

    navigateToLoginPage() {
        super.navigate("/user/login");
    }

    typeCredentials() {
        cy.get(selectors.emailInputLogin).type(data.email)
        cy.get(selectors.passwordInputLogin).type(data.password)
    }

    clickOnLoginButton() {
        cy.get(selectors.loginButtonLogin).click();
    }

    verifyLogin() {
        cy.get(selectors.logoutButtonAccount).should('exist')
    }
}
export default login_PO;