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
    When I swipe up "<swipeCount>"
    And I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"

    Examples:

      | perk                                  | count | swipeCount |
      | Remove four +0 cards                  | 16    | 0          |
      | Replace one -1 card with one +1 card  | 20    | 0          |
      | Add two +1 cards                      | 22    | 0          |
      | Add one +0 STUN card                  | 21    | 0          |
      | Add one +1 WOUND card                 | 21    | 0          |
      | Add one +1 IMMOBILIZE card            | 21    | 0          |
      | Add one +1 CURSE card                 | 21    | 0          |
      | Add one +2 FIRE card                  | 21    | 0          |
      | Add one +2 ICE card                   | 21    | 0          |
      | Add one ⤵ EARTH and one ⤵ AIR card  | 22    | 1          |
      | Add one ⤵ LIGHT and one ⤵ DARK card | 22    | 1          |

  Scenario: Cancel perk selection
    Given data is "Spellweaver"
    And I am at "Perk Update Screen"
    And I press "Remove four +0 cards"
    When I press "Remove four +0 cards"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count 20"

  Scenario: Perk is previously selected
    Given data is "Spellweaver"
    And I am at "Perk Update Screen"
    And I press "Remove four +0 cards"
    And I press "Confirm Button"
    When I am at "Perk Update Screen"
    And I press "Remove four +0 cards"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count 20"


  Scenario Outline: Select Cragheart Perk
    Given data is "Cragheart"
    And I am at "Perk Update Screen"
    When I swipe up "<swipeCount>"
    And I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"

    Examples:

      | perk                                 | count | swipeCount |
      | Remove four +0 cards                 | 16    | 0          |
      | Replace one -1 card with one +1 card | 20    | 0          |
      | Add one -2 and two +2 card           | 23    | 0          |
      | Add one +1 IMMOBILIZE card           | 21    | 0          |
      | Add one +2 MUDDLE card               | 21    | 0          |
      | Add two ⤵ PUSH 2 card               | 22    | 0          |
      | Add two ⤵ EARTH card                | 22    | 0          |
      | Add two ⤵ AIR card                  | 22    | 0          |
      | Ignore negative item effects         | 20    | 0          |
      | Ignore negative scenario effects     | 20    | 1          |


  Scenario Outline: Select Brute Perk
    Given data is "Brute"
    And I am at "Perk Update Screen"
    When I swipe up "<swipeCount>"
    And I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"

    Examples:

      | perk                                         | count | swipeCount |
      | Remove two -1 cards                          | 18    | 0          |
      | Replace one -1 card with one +1 card         | 20    | 0          |
      | Add two +1 cards                             | 22    | 0          |
      | Add one +3 card                              | 21    | 0          |
      | Add three ⤵ PUSH 1 cards                    | 23    | 0          |
      | Add two ⤵ PIERCE 3 card                     | 22    | 0          |
      | Add one ⤵ STUN card                         | 21    | 0          |
      | Add one ⤵ DISARM and one ⤵ MUDDLE card     | 22    | 0          |
      | Add one ⤵ ADD TARGET card                   | 21    | 0          |
      | Add one +1 SHIELD 1, Self card               | 21    | 1          |
      | Ignore negative item effects and one +1 card | 21    | 1          |
