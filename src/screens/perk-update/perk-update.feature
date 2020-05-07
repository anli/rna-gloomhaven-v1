Feature: Perk Update Screen

  Scenario: Data is loaded
    Given data is "Spellweaver"
    When I am at "Perk Update Screen"
    Then I should see "Remove four +0 cards"
    And I should see "Replace one -1 card with one +1 card"
    And I should see "Add two +1 cards"
    And I should see "Add one +0 STUN card"
    And I should see "Add one +1 WOUND card"
    And I should see "Add one +1 IMMOBILIZE card"
    And I should see "Add one +1 CURSE card"
    And I should see "Add one +2 FIRE card"
    And I should see "Add one +2 ICE card"
    And I should see "Add one ⤵ EARTH and one ⤵ AIR card"
    And I should see "Add one ⤵ LIGHT and one ⤵ DARK card"

  Scenario Outline: Select Spellweaver Perk
    Given data is "Spellweaver"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"

    Examples:

      | perk                                  | count |
      | Remove four +0 cards                  | 16    |
      | Replace one -1 card with one +1 card  | 20    |
      | Add two +1 cards                      | 22    |
      | Add one +0 STUN card                  | 21    |
      | Add one +1 WOUND card                 | 21    |
      | Add one +1 IMMOBILIZE card            | 21    |
      | Add one +1 CURSE card                 | 21    |
      | Add one +2 FIRE card                  | 21    |
      | Add one +2 ICE card                   | 21    |
      | Add one ⤵ EARTH and one ⤵ AIR card  | 22    |
      | Add one ⤵ LIGHT and one ⤵ DARK card | 22    |


  Scenario: Cancel perk selection
    Given data is "Spellweaver"
    And I am at "Perk Update Screen"
    And I press "Remove four +0 cards"
    When I press "Remove four +0 cards"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count 20"
