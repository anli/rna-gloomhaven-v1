Feature: Home Screen

  Scenario: Data is loaded
    Given I am any
    When I am at "Home Screen"
    Then I should see "Spellweaver"
    And I should see "Draw Button"
    And I should see "Draw Deck Count"

  Scenario: Draw card
    Given I am at "Home Screen"
    When I press "Draw Button"
    Then I should see "Drawn Card"
    And I should see "Draw Deck Count Decrease By 1"

  Scenario: Shuffle discard into draw
    Given I am at "Home Screen"
    And I press "Draw Button"
    When I press "Shuffle Button"
    Then I should see "No Drawn Card"
    Then I should see "Draw Deck Count back to original"
