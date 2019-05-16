/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/


// GAME OBJECT

class GameObject {
    constructor (attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game`;
    }
}

const testOBJ = new GameObject({createdAt : '01/05/05', dimensions : '2x2x2'});

// CHARACTERSTATS

class CharacterStats extends GameObject{
    constructor (attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
        this.name = attributes.name;
    }
    takeDamage(num = 20) {
        return `${this.name} took ${num} points of damage!`
    }
} 
const testCHAR = new CharacterStats({createdAt: '12/31/1996', dimensions: '186x86x52', healthPoints: 99, name: 'Anthony'});
  
// HUMANOID

class Humanoid extends CharacterStats {
    constructor (attributes) {
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}
  
const testHUMAN = new Humanoid({createdAt: '12/31/1996', dimensions: {length: 2, width: 10, height: 25}, healthPoints: 99, name: 'Tommy', team : 'Red Team', weapons: ['Staff', 'Paper cloth'], language: 'Orkish'});
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    // MAKING HEROES AND VILLAINS
class Hero extends Humanoid {
    constructor(attributes) {
        super(attributes);
        this.alignment = 'Lawfull Good';
    }
    hit(target) {
        if (target.healthPoints > 20) {
            target.healthPoints -= 20;
            console.log(`${this.name} takes a swipe at ${target.name}`)
            console.log(target.takeDamage())
            console.log(`${target.name}'s healtPoints are now at ${target.healthPoints}`);
            console.log('\n');
          }
          else {
            console.log(`${this.name} takes a swipe at ${target.name}, to devastating effect!`)
            target.healthPoints = 0;
            console.log(`${target.name}'s healthPoints have dropped to zero!`)
            return target.destroy();
          }
    }
}

class Villain extends Humanoid {
    constructor (attributes) {
        super (attributes);
        this.alignment = "Chaotic Evil";
    }
    hit(target) {
        if (target.healthPoints > 20) {
            target.healthPoints -= 20;
            console.log(`${this.name} strikes ${target.name} with a cunning move!`)
            console.log(target.takeDamage());
            console.log(`${target.name}'s healtPoints are now at ${target.healthPoints}`);
            console.log('\n');
        }
        else {
            console.log(`${this.name} takes a swipe at ${target.name}, to devastating effect! ${this.name} cackles manically as he sees the damage he has wrought!`)
            target.healthPoints = 0;
            console.log(`${target.name}'s healthPoints have dropped to zero!`)
            return target.destroy();
        }
    }
}  

const testHERO = new Hero({createdAt: '12/31/1996', dimensions: {length: 2, width: 10, height: 25}, healthPoints: 99, name: 'Tommy', team : 'Red Team', weapons: ['Staff', 'Paper cloth'], language: 'Orkish'});
const testVIL = new Villain({createdAt: '12/31/1996', dimensions: {length: 2, width: 10, height: 25}, healthPoints: 99, name: 'EvilTommy', team : 'Red Team', weapons: ['Staff', 'Paper cloth'], language: 'Orkish'});
  
//   testHERO.hit(testVIL);
//   testVIL.hit(testHERO);
//   testHERO.hit(testVIL);
//   testHERO.hit(testVIL);
//   testVIL.hit(testHERO);
//   testHERO.hit(testVIL);
//   testVIL.hit(testHERO);
//   testVIL.hit(testHERO);
//   testVIL.hit(testHERO);