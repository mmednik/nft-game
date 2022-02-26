// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract SevenLegendaryMonsters {
    struct CharacterAttributes {
        uint256 characterIndex;
        string name;
        string imageURI;
        uint256 hp;
        uint256 maxHp;
        uint256 attackDamage;
        uint256 defense;
        uint256 criticChance;
        uint256 evasionChance;
    }

    CharacterAttributes[] defaultCharacters;

    constructor(
        string[] memory characterNames,
        string[] memory characterImageURIs,
        uint256[] memory characterHp,
        uint256[] memory characterAttackDmg,
        uint256[] memory characterDefense,
        uint256[] memory characterCriticChance,
        uint256[] memory characterEvasionChance
    ) {
        for (uint256 i = 0; i < characterNames.length; i += 1) {
            defaultCharacters.push(
                CharacterAttributes({
                    characterIndex: i,
                    name: characterNames[i],
                    imageURI: characterImageURIs[i],
                    hp: characterHp[i],
                    maxHp: characterHp[i],
                    attackDamage: characterAttackDmg[i],
                    defense: characterDefense[i],
                    criticChance: characterCriticChance[i],
                    evasionChance: characterEvasionChance[i]
                })
            );

            CharacterAttributes memory c = defaultCharacters[i];
            console.log(
                "Done initializing %s w/ HP %s, img %s, def %s, crit %s",
                c.name,
                c.hp,
                c.imageURI,
                c.defense,
                c.criticChance,
                c.evasionChance
            );
        }
    }
}
