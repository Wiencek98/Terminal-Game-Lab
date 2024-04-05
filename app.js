// Title : Wasteland Wander
const prompt = require ('prompt-sync')() /// allows us to get user input
// into the wasteland
function barrenWasteLand() {
    console.log('You entered a barren wasteland');
}
// search for resources
function searchForReasources() {
    const resourcesChance = Math.random()
    if(resourcesChance < 5) {
        console.log('You searched and found nothing');
    } else {
        console.log('You searched and found somne useful items.');
        const foundItems = ['water bottle', 'canned food', 'medical supplies.']
        console.log('You found  ' + foundItems.join(', '));
        inventory.push(...foundItems)
        console.log(inventory);
    }
}
// search for shelter
function searchForShelter () {
    console.log('You start Looking for Shelter');
    const shelterChance = Math.random()
    if (shelterChance < 0.8) {
        console.log("You searched for shelter but find none nearby");
    } else {
        console.log('You find a small cave providing shelter from the elements');
    }
}
function exploreLocation() {
    console.log("You decide to explore a nearby location.");
    // Generate a random number to simulate the chance of finding valuable items
    const itemChance = Math.random();
    if (itemChance < 0.3) { // 30% chance of finding valuable items
        const moreItemsFound = ['gold bars' , ' laptop' , ' and a shovel']
        console.log(`You discover  ${moreItemsFound} hidden at the location!`);
        inventory.push('gold bars', ' laptop' , ' shovel')
    } else {
        console.log("You search the location but cannot find any valuable items.");
        console.log("You decide to continue your journey.");
    }
}
// Usernamer Creation
const username = prompt('Lost Wander, What is your name??')
console.log(`Nice to finally meet you ${username}`); // allows us to see the username of player.
let inventory = []
// ------------------------------------------------------ Character Creation -------------------------------------------------
const attributes = {
    strength : 0,
    agility : 0,
    charisma : 0,
    intelligence: 0,
    luck : 0,
    endurance : 0,
}
console.log('Please Chose your attributes.');
let skillPoints = 25;
const skillDistribution = ()=>{
    for(let [keys, values] of Object.entries(attributes)){
        if(skillPoints > 0){
        console.log(`You have ${skillPoints} skill points left!`)
        const newValue = prompt(keys + ": ");
        skillPoints = skillPoints - newValue;
        attributes[keys] = newValue;
    }
    }
}

console.clear();
// --------------------------------------------------------- Gameplay ------------------------
console.log(' You awake at Doc Morris`s house, disoriented and unsure how you got there')
console.log('Doc Morris: `Hey i found you almost dead on the side of the road')
console.log("Go and Explore the rooms, gather clues, and confront the secrets lurking in the shadows.");
// Dialog for doc morris and a task

function decisionPoint() {
    console.log(`${username} you come to and see a dufflebag on the table next to Doc Morris.`);
    console.log('What do you want to do?');
    console.log('Choice 1, You take the bag');
    console.log('Choice 2, Doc Morris offers you something.');
    console.log('Choice 3, You wake up and leave');
     const decision = prompt("Enter your choice (1 , 2 or 3): ");
     switch (decision) {
        case '1':
             console.log("You chose the bag.");
             // You can add further actions or consequences here
             console.log('You search the bag, you found a gun and some food.');
             inventory.push('Pistol ' , ' Candy Bar')
             console.log(`You added a ${inventory} to your inventory! Now you leave Doc Morris house`);
             barrenWasteLand();
             break;
         case '2':
             console.log("Doc Morris offers you food.");
            // You can add further actions or consequences here
            console.log(`Take this bag of food ${username} and eat it sparingly`);
            inventory.push('Sandwhich' , ' Water' , ' Money')
            console.log(`You added a ${inventory} to your inventory! Now you leave Doc Morris house.`);
            barrenWasteLand();
             break;
        case '3':
            console.log('You walk out the house into the wasteland');
             break;
         default:
             console.log("Invalid choice. Please enter either 1 or 2.");
            decisionPoint(); // Recursive call to allow the user to try again
            break;
     }
}

 console.clear
function exploreWasteland(){
    console.log('You are now exploring a vast barren wasteland');
    console.log('What would you like to do?');
    console.log('1. Looking for resources');
    console.log('2. Look for shelter ');
    const exploringChoice = prompt ('Enter your choice... 1 or 2...')
    console.clear()
    switch (exploringChoice) {
        case '1':
        console.log('You start searching for resources..');
        searchForReasources()
        break;
        case '2':
            searchForShelter()
        }
    }

function meetTraveler() {
    console.log("You meet another traveler in the wasteland.");
    // Generate a random number to determine the type of interaction with the traveler
    const interactionType = Math.random();
    switch (true) {
        case interactionType < 0.2: // 40% chance of offering information
            console.log("The traveler offers you valuable information about nearby locations.");
           exploreLocation()
            break;
        case interactionType < 0.3: // 30% chance of trading items
            console.log("The traveler is willing to trade items with you.");
            break;
        default: // 30% chance of providing a quest
            console.log("The traveler asks for your help in completing a quest.");
            function handleQuest() {
                console.log("Quest: Gather 10 pieces of scrap metal and bring them back to the traveler.");
                console.log("You need to collect 10 pieces of scrap metal.");
                let scrapsCollected = 0;
                while (scrapsCollected < 5) {
                    console.log(`You have collected ${scrapsCollected} pieces of scrap metal.`);
                    const scrapFound = Math.random() < 0.5; // 50% chance of finding a scrap metal
                    if (scrapFound) {
                        console.log("You found a piece of scrap metal!");
                        scrapsCollected++;
                    } else {
                        console.log("You search for scrap metal but find nothing.");
                    }
                    // You can add additional logic here, such as consuming time or resources during the search
                }
                console.log("You have collected enough scrap metal. Return to the traveler to complete the quest.");
    
            }
          handleQuest()
            
            break;
    }
}
// Call the meetTraveler function to simulate the interaction


function tradeWithTraveler() {
    console.log("You decide to trade items with the traveler.");
    const travelerItems = ['ammo', 'medkit', 'map'];
    console.log("Traveler's items: " + travelerItems.join(', '));
    console.log("Your items: " + inventory.join(', '));
    const tradeItem = prompt("Enter the item you want to trade: ");
    console.log("You entered: " + tradeItem); // Debugging output
    console.log("Inventory: " + inventory.join(', ')); // Debugging output
    const foundItemIndex = inventory.findIndex(item => item.trim() === tradeItem.trim());
    if (foundItemIndex !== -1) {
        const tradedItem = inventory[foundItemIndex];
        inventory.splice(foundItemIndex, 1);
        const randomIndex = Math.floor(Math.random() * travelerItems.length);
        const receivedItem = travelerItems[randomIndex];
        travelerItems.splice(randomIndex, 1);
        travelerItems.push(tradedItem);
        inventory.push(receivedItem);
        console.log(`You traded ${tradedItem} with the traveler and received ${receivedItem}.`);
        console.log("Traveler's items: " + travelerItems.join(', '));
        console.log("Your items: " + inventory.join(', '));
    } else {
        console.log("You don't have that item in your inventory.");
        console.log("Would you like to trade something else?");
        return;
    }
}




// Program

console.log(`Nice to finally meet you ${username}`);
skillDistribution();
console.clear();
console.log(' You awake at Doc Morris`s house, disoriented and unsure how you got there');
console.log('Doc Morris: `Hey i found you almost dead on the side of the road');
console.log("Go and Explore the rooms, gather clues, and confront the secrets lurking in the shadows.");
decisionPoint();// call decision point function
exploreWasteland();// call explore wasteland function
meetTraveler();// call meet traveler function
tradeWithTraveler();//  call trade with traveler function
console.log('You continue your journey through the wasteland..... PART TWO COMING SOON!!! ™️');// continue journey
