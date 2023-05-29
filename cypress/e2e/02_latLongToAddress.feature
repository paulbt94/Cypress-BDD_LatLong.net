Feature: Reverse Geocoding Convert Lat Long to Address

    Reverse geocoding is the process to convert the latitude and longitude coordinates to a readable address

    Background: 
    Given I am logged in to LatLong
    
    Scenario Outline: : Enter Latitude and Longitude to get the target address
    Given I navigate to the reverse geocoding page
    When I type the latitude <placeLatitude> and longitude <placeLongitude> coordinates
    And I click the Convert button
    Then I should be presented the target address <placeName>

    Examples:
        | placeLatitude | placeLongitude | placeName |
        | 51.507351     | -0.127758      | London    |  
        | 40.748230     | -73.992668     | New York  |