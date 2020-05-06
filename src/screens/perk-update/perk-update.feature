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
    And I should see "Add one +2 ⤵ FIRE card"
    And I should see "Add one +2 ⤵ ICE card"
    And I should see "Add one ⤵ EARTH and one ⤵ AIR card"
