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

  Scenario Outline: Add bless/curse/equipment card into draw
    Given I am at "Home Screen"
    When I press "Add <cardType> Card Button"
    Then I should see "Draw Deck Count Increase by 1"

    Examples:

      | cardType  |
      | Bless     |
      | Curse     |
      | Equipment |

  Scenario Outline: Remove bless/curse/equipment card from draw
    Given I am at "Home Screen"
    And I press "Add <cardType> Card Button"
    When I press "Remove <cardType> Card Button"
    And I press "Remove <cardType> Card Button"
    Then I should see "Draw Deck Count back to original"

    Examples:

      | cardType  |
      | Bless     |
      | Curse     |
      | Equipment |

  Scenario: Update perks
    Given I am at "Home Screen"
    When I press "Update Perk Button"
    Then I should see "Perks Screen"

  Scenario: Character selection
    Given I am at "Home Screen"
    When I press "Character Selection Button"
    Then I should see "Character Selection Screen"

  Scenario: Draw shuffle card
    Given first card is "Miss Card"
    And I am at "Home Screen"
    When I press "Draw Button"
    Then I should see "Drawn Cards **Shuffle next round**"

  Scenario: Diviner Effect
    Given I am at "Home Screen"
    Given I press "Draw Button"
    When I press "Toggle Diviner Effect Button"
    Then I should see "Diviner Effect Buttons"
    When I press "Top Button"
    Then I should see "Draw Deck Count 20"
    When I press "Draw Button"
    When I press "Bottom Button"
    Then I should see "Draw Deck Count 20"
