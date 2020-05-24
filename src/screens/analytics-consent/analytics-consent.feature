Feature: Analytics Consent Screen

  Scenario: Data is loaded
    Given data is "loaded"
    When I am at "Analytics Consent Screen"
    Then I should see "We take your privacy seriously Text"
    Then I should see "No, I would like to opt out Text"
    Then I should see "Yes, I would love to help out Text"

  Scenario: User Accept
    Given I am at "Analytics Consent Screen"
    When I press "Yes, I would love to help out"
    Then I accept consent

  Scenario: User Decline
    Given I am at "Analytics Consent Screen"
    When I press "No, I would like to opt out"
    Then I decline consent
