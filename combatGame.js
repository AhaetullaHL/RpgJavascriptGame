/**
 * @author Hermann & Tristan
 * @copyright 2020
 * @name RolePlayGame
 * @version 1.0.0
 */

/**
 * @since 1.0.0
 * 
 * @function character() - Create a new caracter
 * 
 * @param {string} name - Set the caracter name
 * @param {string} type - Set the caracter class
 * @param {number} dmg - Set the character damage
 * @param {array} [inventory=[]] - Set the list of inventory
 * @param {number} [life=100] - Set the start life level
 * @param {number} [isLiving=true] - Set the default status of life (living/dead)
 * 
 * @returns {object} Return a new object of character
 */
function character(name, type, dmg, inventory = [], life = 100) {
  let char = {
    charName : name,
    charType : type,
    charInventory : inventory,
    charLife : life,
    charDmg : dmg,

    isAlive(){
      return this.charLife > 0;
    },

    canAttack(){
      return this.isAlive();
    },

    attack(target){
      if (this.canAttack()) {
        console.log("For Frodo!");
        target.receiveDamage(this.charDmg);
      }
    },

    receiveDamage(dmg){
      if (this.random() > 90) this.dodge();
      this.charLife -= dmg;
      if(dmg > 25) console.warn("Critical Hit!");
    },

    random(){
      let min = 0;
      let max = 100;
      return Math.floor(Math.random() * (max - min)) + min;
    },

    dodge(){
      dmg = 0;
      console.log("Dodge!");
    }
  };


  return char;
}

/**
 * @since 1.0.0
 * 
 * @function classFactory() - Create a new character class
 * 
 * @param {string} name - The class name of the caracter
 * @param {strong} strength - The base attack strength of the class
 * @param {array} abilities - The powers of the class
 */
function classFactory(name, strength, abilities) {
  return {
    className: name,
    classStrenght: strength,
    classAbilities: abilities
  };
}

/**
 * @since 1.0.0
 * 
 * @function itemsFactory() - Create a new item
 * 
 * @param {string} name - The name of your item
 * @param {string} description - An beautiful description
 * @param {number} durability - Durability of the item, decrease when used
 * @param {number} damages - Damage level of the item, to hit the enemy with more POWEEERRRR
 * @param {boolean} [isConsumable=false] - This item is conssumable ?
 * @param {boolean} [isQuestItem=false] - This item is a quest item ?
 * 
 * @returns {object} Return a new object of item
 */
function itemsFactory(name, description, durability = 1, damages = 0, isConsumable = false, isQuestItem = false) {
  return {
    itemName: name,
    itemDescription: description,
    itemDurability: durability,
    itemDamages: damages,
    itemIsConsumable: isConsumable,
    itemQuestItem: isQuestItem,
    // Methods
    useItem() {
      if (this.itemDurability > 0) {
        console.log(`The item ${this.itemName} was used !`);
        this.itemDurability--;
        if (this.itemDurability <= 0) {
          removeFromInventory(this);
        }
      }
    },
    showItem() {
      console.info(`#### Descriptif de l'objet ####\n\rName : ${this.itemName}\n\rDescription : ${this.itemDescription}\n\r--------------------------------\n\rDamages : ${this.itemDamages}\n\rDurability : ${this.itemDurability}`);
    }
  };
}

/**
 * @since 1.0.0
 * 
 * @function startGame() Start the game
 * @param {var} firstChar Your first character
 * @param {var} secondChar Your second character
 * 
 * @callback Console.log() Write in the console
 */
function startGame(firstChar, secondChar) {
  while(firstChar.isAlive() && secondChar.isAlive()) {
    firstChar.attack(secondChar);
    secondChar.attack(firstChar);
    console.log(`Vie de ${firstChar.charName} : ${firstChar.charLife} \n Vie de ${secondChar.charName} : ${secondChar.charLife}`);
  }
  if (firstChar.isAlive()) {
    console.log(`${secondChar.charName} est mort, félicitation à ${firstChar.charName}`);
  } else {
    console.log(`${firstChar.charName} est mort, félicitation à ${secondChar.charName}`);
  }
}