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

  Scenario: No card to draw
    Given data is "Draw Deck Count 1"
    And I am at "Home Screen"
    When I press "Draw Button"
    And I press "Draw Button"
    Then I should see "Draw Deck Count 0"

  Scenario: Shuffle discard into draw
    Given I am at "Home Screen"
    And I press "Draw Button"
    When I press "Shuffle Button"
    Then I should see "No Drawn Card"
    Then I should see "Draw Deck Count back to original"

  Scenario: Add bless card into draw
    Given I am at "Home Screen"
    When I press "Add Bless Card Button"
    Then I should see "Draw Deck Count Increase by 1"

  Scenario: Remove bless card from draw
    Given I am at "Home Screen"
    And I press "Add Bless Card Button"
    When I press "Remove Bless Card Button"
    Then I should see "Draw Deck Count back to original"

  Scenario: Add curse card into draw
    Given I am at "Home Screen"
    When I press "Add Curse Card Button"
    Then I should see "Draw Deck Count Increase by 1"

  Scenario: Remove curse card from draw
    Given I am at "Home Screen"
    And I press "Add Curse Card Button"
    When I press "Remove Curse Card Button"
    Then I should see "Draw Deck Count back to original"
