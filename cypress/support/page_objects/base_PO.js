class base_PO {
    
    navigate(path) {
        cy.fixture("config.json").then((data) => {
            cy.visit(data.latLongURL + path)
        })
    }

 }
 export default base_PO;