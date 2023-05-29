Feature: Latitude and Longitude Finder

    The latitude and longitude finder let the user search a place using its name and it will find the lat long coordinates

    Background: 
    Given I am logged in to Latlong
    
    Scenario Outline: : Find Lat Long coordinates using a place name
    Given I navigate to the latlong webpage
    When I type a place name <placeName>
    And I click the find button
    Then I should be presented the latitude <placeLatitude> and longitude <placeLongitude> coordinates

    Examples:
        | placeName       | placeLatitude | placeLongitude |
        | London, UK      | 51.507351     | -0.127758      |
        | New York, 10001 | 40.748230     | -73.992668     |
