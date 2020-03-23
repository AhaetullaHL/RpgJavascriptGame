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
    charliving : isLiving
  };
  return char;
}

/**
 * @since 1.0.0
 * 
 * @function itemCreate() - Create a new item
 * 
 * @param {string} name - The name of your item
 * @param {string} description - An beautiful description
 * @param {number} durability - Durability of the item, decrease when used
 * @param {boolean} [isConssumable=false] - This item is conssumable ?
 * @param {boolean} [isQuestItem=false] - This item is a quest item ?
 */
function itemCreate(name, description, durability, isConssumable = false, isQuestItem = false) {
  // Code ...
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
 // Code ...
}