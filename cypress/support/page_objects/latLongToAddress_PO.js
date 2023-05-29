import base_PO from "./base_PO"
import selectors from "../selectors"

class latLongToAddress_PO extends base_PO{
    
    navigateToLatLongToAddressPage() {
        super.navigate("/Show-Latitude-Longitude.html")
        cy.get(selectors.convertButtonReverse).should('exist')
    }

    typeCoordinates(placeLatitude, placeLongitude) {
        cy.get(selectors.latitudeInputReverse).type(placeLatitude)
        cy.get(selectors.longitudeInputReverse).type(placeLongitude)
    }

    clickConvertButton() {
        cy.get(selectors.convertButtonReverse).click()
    }

    verifyAddress(placeName) {
        cy.get(selectors.addressTextReverse).should('contain', placeName)
    }

 }
 export default latLongToAddress_PO;