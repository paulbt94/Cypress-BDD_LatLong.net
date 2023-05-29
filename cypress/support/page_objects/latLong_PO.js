import base_PO from "./base_PO"
import selectors from "../selectors"

class latLong_PO extends base_PO{
    
    navigateToLatLongPage() {
        super.navigate("")
        cy.get(selectors.placeNameInputFinder).should('exist')
    }

    typePlaceName(placeName) {
        cy.get(selectors.placeNameInputFinder).type(placeName)
    }

    clickFindButton() {
        cy.get(selectors.findButtonFinder).click()
    }

    verifyCoordinates(placeLatitude, placeLongitude) {
        cy.get(selectors.latlongSpanFinder).should('contain', `${placeLatitude}, ${placeLongitude}`)
    }

 }
 export default latLong_PO;