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
 * @param {array} [inventory=[]] - Set the list of inventory
 * @param {number} [life=100] - Set the start life level
 * @param {number} [isLiving=true] - Set the default status of life (living/dead)
 * 
 * @returns {object} Return a new object of character
 */
function character(name, type, inventory = [], life = 100, isLiving = true) {
  let char = {
    charName : name,
    charType : type,
    charInventory : inventory,
    charLife : life,
    charLiving : isLiving,
    /**
     * Move the character
     * 
     * TODO:
     * - advance / step back
     * - right / left
     * - turn
     * - 
     */
    move(){

    },
    /**
     * Attack of Character
     * 
     * TODO:
     * - 
     */
    attack(target){
      target.life -= 1
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
  while(firstChar.charLiving && secondChar.charLiving) {
    firstChar.attack(secondChar);
    secondChar.attack(firstChar);
    console.log(`Vie de ${firstChar.charName} : ${firstChar.charLife} \n Vie de ${secondChar.charName} : ${secondChar.charLife}`);
  }
  if(firstChar.charLife === 0) {
    console.log(`${firstChar.charName} est mort, félicitation à ${secondChar.charName}`);
  } else {
    console.log(`${secondChar.charName} est mort, félicitation à ${firstChar.charName}`);
  }
}