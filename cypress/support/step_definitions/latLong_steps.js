import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import latLong_PO from "../page_objects/latLong_PO";
import login_PO from "../page_objects/login_PO";

const latLongPage = new latLong_PO;
const loginPage = new login_PO;

Given(`I am logged in to Latlong`, () => {
    loginPage.navigateToLoginPage();
    loginPage.typeCredentials();
    loginPage.clickOnLoginButton();
})

Given(`I navigate to the latlong webpage`, () => {
    latLongPage.navigateToLatLongPage();
})

When (`I type a place name {}`, (placeName) => {
    latLongPage.typePlaceName(placeName)
})

When (`I click the find button`, () => {
    latLongPage.clickFindButton()
})

Then (`I should be presented the latitude {} and longitude {} coordinates`, (placeLatitude, placeLongitude) => {
    latLongPage.verifyCoordinates(placeLatitude, placeLongitude)
})