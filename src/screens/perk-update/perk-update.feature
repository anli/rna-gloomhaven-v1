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

  Scenario: Perk is previously selected
    Given data is "Spellweaver"
    And data is "Remove four +0 cards"
    When I am at "Perk Update Screen"
    And I press "Remove four +0 cards"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count 20"

  Scenario Outline: Select Cragheart Perk
    Given data is "Cragheart"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"

    Examples:

      | perk                                 | count |
      | Remove four +0 cards                 | 16    |
      | Replace one -1 card with one +1 card | 20    |
      | Add one -2 and two +2 card           | 23    |
      | Add one +1 IMMOBILIZE card           | 21    |
      | Add one +2 MUDDLE card               | 21    |
      | Add two ⤵ PUSH 2 card               | 22    |
      | Add two ⤵ EARTH card                | 22    |
      | Add two ⤵ AIR card                  | 22    |
      | Ignore negative item effects         | 20    |
      | Ignore negative scenario effects     | 20    |

  Scenario Outline: Select Brute Perk
    Given data is "Brute"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"


    Examples:

      | perk                                         | count |
      | Remove two -1 cards                          | 18    |
      | Replace one -1 card with one +1 card         | 20    |
      | Add two +1 cards                             | 22    |
      | Add one +3 card                              | 21    |
      | Add three ⤵ PUSH 1 cards                    | 23    |
      | Add two ⤵ PIERCE 3 cards                    | 22    |
      | Add one ⤵ STUN card                         | 21    |
      | Add one ⤵ DISARM and one ⤵ MUDDLE card     | 22    |
      | Add one ⤵ ADD TARGET card                   | 21    |
      | Add one +1 SHIELD 1, Self card               | 21    |
      | Ignore negative item effects and one +1 card | 21    |

  Scenario Outline: Select Mindthief Perk
    Given data is "Mindthief"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"


    Examples:

      | perk                                     | count |
      | Remove two -1 cards                      | 18    |
      | Remove four +0 cards                     | 16    |
      | Replace two +1 cards with two +2 cards   | 20    |
      | Replace one -2 card with one +0 card     | 20    |
      | Add one +2 ICE card                      | 21    |
      | Add two ⤵ +1 cards                      | 22    |
      | Add three ⤵ PULL 1 cards                | 23    |
      | Add three ⤵ MUDDLE cards                | 23    |
      | Add two ⤵ IMMOBILIZE cards              | 22    |
      | Add one ⤵ STUN card                     | 21    |
      | Add one ⤵ DISARM and one ⤵ MUDDLE card | 22    |
      | Ignore negative scenario effects         | 20    |

  Scenario Outline: Select Scoundrel Perk
    Given data is "Scoundrel"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"


    Examples:

      | perk                                 | count |
      | Remove two -1 cards                  | 18    |
      | Remove four +0 cards                 | 16    |
      | Replace one -2 card with one +0 card | 20    |
      | Replace one -1 card with one +1 card | 20    |
      | Replace one +0 card with one +2 card | 20    |
      | Add two ⤵ +1 cards                  | 22    |
      | Add two ⤵ PIERCE 3 cards            | 22    |
      | Add two ⤵ POISON cards              | 22    |
      | Add two ⤵ MUDDLE cards              | 22    |
      | Add one ⤵ INVISIBLE cards           | 21    |
      | Ignore negative scenario effects     | 20    |

  Scenario Outline: Select Tinkerer Perk
    Given data is "Tinkerer"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"


    Examples:

      | perk                                 | count |
      | Remove two -1 cards                  | 18    |
      | Replace one -2 card with one +0 card | 20    |
      | Add two +1 cards                     | 22    |
      | Add one +3 card                      | 21    |
      | Add two ⤵ FIRE cards                | 22    |
      | Add three ⤵ MUDDLE cards            | 23    |
      | Add one +1 WOUND card                | 21    |
      | Add one +1 IMMOBILIZE card           | 21    |
      | Add one +1 HEAL 2 card               | 21    |
      | Add one +0 ADD TARGET card           | 21    |
      | Ignore negative scenario effects     | 20    |

  Scenario Outline: Select Beast Tyrant Perk
    Given data is "Beast Tyrant"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"


    Examples:

      | perk                                 | count |
      | Remove two -1 cards                  | 18    |
      | Replace one -1 card with one +1 card | 20    |
      | Replace one +0 card with one +2 card | 20    |
      | Add one +1 WOUND card                | 21    |
      | Add one +1 IMMOBILIZE card           | 21    |
      | Add two ⤵ HEAL 1, Self cards        | 22    |
      | Add two ⤵ EARTH card                | 22    |
      | Ignore negative scenario effects     | 20    |

  Scenario Outline: Select Berserker Perk
    Given data is "Berserker"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"


    Examples:

      | perk                                    | count |
      | Remove two -1 cards                     | 18    |
      | Remove four +0 cards                    | 16    |
      | Replace one -1 card with one +1 card    | 20    |
      | Replace one +0 card with one ⤵ +2 card | 20    |
      | Add two ⤵ WOUND cards                  | 22    |
      | Add one ⤵ STUN card                    | 21    |
      | Add one ⤵ -1 DISARM card               | 21    |
      | Add two ⤵ HEAL 1, Self cards           | 22    |
      | Add one +2 FIRE card                    | 21    |
      | Ignore negative item effects            | 20    |

  Scenario Outline: Select Bladeswarm Perk
    Given data is "Bladeswarm"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"


    Examples:

      | perk                                             | count |
      | Remove one -2 card                               | 19    |
      | Remove four +0 cards                             | 16    |
      | Replace one -1 card with one +1 AIR card         | 20    |
      | Replace one -1 card with one +1 EARTH card       | 20    |
      | Replace one -1 card with one +1 LIGHT card       | 20    |
      | Replace one -1 card with one +1 DARK card        | 20    |
      | Add two ⤵ HEAL 1, Self cards                    | 22    |
      | Add one +1 WOUND card                            | 21    |
      | Add one +1 POISON card                           | 21    |
      | Add one +2 MUDDLE card                           | 21    |
      | Ignore negative item effects and one +1 card     | 21    |
      | Ignore negative scenario effects and one +1 card | 21    |

  Scenario Outline: Select Diviner Perk
    Given data is "Diviner"
    And I am at "Perk Update Screen"
    When I press "<perk>"
    And I press "Confirm Button"
    Then I should see "Draw Deck Count <count>"


    Examples:

      | perk                                                           | count |
      | Remove two -1 cards                                            | 18    |
      | Remove one -2 card                                             | 19    |
      | Replace two +1 card with one +3 SHIELD 1, Self card            | 19    |
      | Replace one +0 card with one +1 SHIELD 1, Affect any ally card | 20    |
      | Replace one +0 card with one +2 DARK card                      | 20    |
      | Replace one +0 card with one +2 LIGHT card                     | 20    |
      | Replace one +0 card with one +3 MUDDLE card                    | 20    |
      | Replace one +0 card with one +2 CURSE card                     | 20    |
      | Replace one +0 card with one +2 REGENERATE, Self card          | 20    |
      | Replace one -1 card with one +1 HEAL 2, Affect any ally card   | 20    |
      | Add two ⤵ HEAL 1, Self cards                                  | 22    |
      | Add two ⤵ CURSE cards                                         | 22    |
      | Ignore negative scenario effects and add two +1 cards          | 22    |
