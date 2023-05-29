import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import latLongToAddress_PO from "../page_objects/latLongToAddress_PO";
import login_PO from "../page_objects/login_PO";

const reversePage = new latLongToAddress_PO;
const loginPage = new login_PO;

Given(`I am logged in to LatLong`, () => {
    loginPage.navigateToLoginPage();
    loginPage.typeCredentials();
    loginPage.clickOnLoginButton();
})

Given(`I navigate to the reverse geocoding page`, () => {
    reversePage.navigateToLatLongToAddressPage();
})

When (`I type the latitude {} and longitude {} coordinates`, (placeLatitude, placeLongitude) => {
    reversePage.typeCoordinates(placeLatitude, placeLongitude)
})

When (`I click the Convert button`, () => {
    reversePage.clickConvertButton()
})

Then (`I should be presented the target address {}`, (placeName) => {
    reversePage.verifyAddress(placeName)
})