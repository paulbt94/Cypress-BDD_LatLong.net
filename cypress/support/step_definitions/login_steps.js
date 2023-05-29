import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import login_PO from "../page_objects/login_PO";

const loginPage = new login_PO;

Given(`I navigate to the latlong login page`, () => {
    loginPage.navigateToLoginPage();
})

When (`I enter the email {} and password {}`, (email, password) => {
    loginPage.typeCredentials(email, password)
})

When (`I click the Login button`, () => {
    loginPage.clickOnLoginButton()
})

Then (`I should be signed in to Latlong`, () => {
    loginPage.verifyLogin()
})