Feature: Latlong User Login

The user should be able to log in by entering correct credentials

Scenario Outline: Login to Latlong web page
Given I navigate to the latlong login page
When I enter the email <email> and password <password>
And I click the Login button
Then I should be signed in to Latlong

Examples:
| email                   | password      |
|cypressbdd123@yopmail.com| CypressBDD123 |