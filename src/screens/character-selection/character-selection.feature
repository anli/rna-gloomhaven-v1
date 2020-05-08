Feature: Character Selection Screen

  Scenario: Data is loaded
    Given data is "loaded"
    When I am at "Character Selection Screen"
    Then I should see "Spellweaver Button"
    And I should see "Cragheart Button"
    And I should see "Brute Button"
    And I should see "Mindthief Button"
    And I should see "Scoundrel Button"
    And I should see "Tinkerer Button"

  Scenario Outline: Character selected
    Given I am at "Character Selection Screen"
    When I press "<character> Button"
    Then I should see "<character>"

    Examples:

      | character   |
      | Spellweaver |
      | Cragheart   |
      | Brute       |
      | Mindthief   |
      | Scoundrel   |
      | Tinkerer    |
