Feature: Setting Screen

  Scenario: User Accepted
    Given data is "User Accepted"
    When I am at "Setting Screen"
    Then I should see "You're sharing your app usage anonymously Text"

  Scenario: User Declined
    Given data is "User Declined"
    When I am at "Setting Screen"
    Then I should see "No longer sharing any app usage Text"

  Scenario: User Change Privacy Option
    Given data is "User Declined"
    When I am at "Setting Screen"
    And I press "Privacy Option"
    Then I should see "Analytics Consent Screen"

  Scenario: User Change Dark Mode
    Given data is "any"
    When I am at "Setting Screen"
    And I press "Dark Mode"
    Then I should see "Dark Mode"
