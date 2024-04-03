// Lost Wanderer
// Variables
const prompt = require('prompt-sync')();//allows us to get user input
const username = prompt("Lost Wanderer, what is your name? ");// inpute username

let inventory = []; // array to store items

const attributes = {
    strength : 0,
    agility : 0,
    charisma : 0,
    intelligence: 0,
    luck : 0,
    endurance : 0
};// attributes object


let skillPoints = 25;// skill points to distribute

// Functions 
function barrenWasteLand() {// barren wasteland function
    console.log('You entered a barren wasteland');
}

function searchForReasources() {// search for resources function
    const resourcesChance = Math.random();
    if (resourcesChance < 5) {
        console.log('You searched and found nothing');
    } else {
        console.log('You searched and found somne useful items.');
        const foundItems = ['water bottle', 'canned food', 'medical supplies.'];
        console.log('You found  ' + foundItems.join(', '));
        inventory.push(...foundItems);
        console.log(inventory);
    }
}

function searchForShelter() {// search for shelter function
    console.log('You start Looking for Shelter');
    const shelterChance = Math.random();
    if (shelterChance < 5) {
        console.log("You searched for shelter but find none nearby");
    } else {
        console.log('You find a small cave providing shelter from the elements');
    }
}

function exploreLocation() {// explore location function
    console.log("You decide to explore a nearby location.");
    const itemChance = Math.random();
    if (itemChance < 0.3) {
        const moreItemsFound = ['gold bars', ' laptop', ' and a shovel'];
        console.log(`You discover  ${moreItemsFound} hidden at the location!`);
        inventory.push('gold bars', ' laptop', ' shovel');
    } else {
        console.log("You search the location but cannot find any valuable items.");
        console.log("You decide to continue your journey.");
    }
}

function skillDistribution() {// skill distribution function
    for (let [keys, values] of Object.entries(attributes)) {
        if (skillPoints > 0) {
            console.log(`You have ${skillPoints} skill points left!`);
            const newValue = prompt(keys + ": ");
            skillPoints = skillPoints - newValue;
            attributes[keys] = newValue;
        }
    }
}

function decisionPoint() {// decision point function
    console.log(`${username} you come to and see a dufflebag on the table next to Doc Morris.`);
    console.log('What do you want to do?');
    console.log('Choice 1, You take the bag');
    console.log('Choice 2, Doc Morris offers you something.');
    console.log('Choice 3, You wake up and leave');
    const decision = prompt("Enter your choice (1 , 2 or 3): ");
    console.clear();
    switch (decision) {// switch statement
        case '1':
            console.log("You chose the bag.");
            console.log('You search the bag, you found a gun and some food.');
            inventory.push('Pistol ', ' Candy Bar');
            console.log(`You added a ${inventory} to your inventory! Now you leave Doc Morris house`);
            barrenWasteLand();
            break;
        case '2':
            console.log("Doc Morris offers you food.");
            console.log(`Take this bag of food ${username} and eat it sparingly`);
            inventory.push('Sandwhich', ' Water', ' Money');
            console.log(`You added a ${inventory} to your inventory! Now you leave Doc Morris house.`);
            barrenWasteLand();
            break;
        case '3':
            console.log('You walk out the house into the wasteland');
            break;
        default:
            console.log("Invalid choice. Please enter either 1 or 2.");
            decisionPoint();
            break;
    }
}

function exploreWasteland() {// explore wasteland function
    while (true) {
        console.clear();
        console.log('You are now exploring a vast barren wasteland');// explore wasteland
        console.log('What would you like to do?');
        console.log('1. Looking for resources');
        console.log('2. Look for shelter ');
        const exploringChoice = prompt('Enter your choice... 1 or 2...');// prompt user to enter choice
        
        switch (exploringChoice) {
            case '1':
                console.log('You start searching for resources..');// search for resources
                searchForReasources();
                break;
            case '2':
                searchForShelter();
                break;
        }
        
        const continueExploring = prompt('Do you want to continue exploring? (yes/no)...');// prompt user to continue exploring
        if (continueExploring.toLowerCase() !== 'yes') {
            break;
        }
    }
}
function meetTraveler() {// meet traveler function  
    console.log("You meet another traveler in the wasteland.");
    const interactionType = Math.random();
    switch (true) {// switch statement
        case interactionType < 0.4:
            console.log("The traveler offers you valuable information about nearby locations.");
            exploreLocation();
            break;
        case interactionType < 0.7:
            console.log("The traveler is willing to trade items with you.");
            break;
        default:
            console.log("The traveler asks for your help in completing a quest.");
            function handleQuest() {
                console.log("Quest: Gather 10 pieces of scrap metal and bring them back to the traveler.");
                console.log("You need to collect 10 pieces of scrap metal.");
                let scrapsCollected = 0;
                while (scrapsCollected < 5) {
                    console.log(`You have collected ${scrapsCollected} pieces of scrap metal.`);
                    const scrapFound = Math.random() < 0.5;
                    if (scrapFound) {
                        console.log("You found a piece of scrap metal!");
                        scrapsCollected++;
                    } else {
                        console.log("You search for scrap metal but find nothing.");
                    }
                }
                console.log("You have collected enough scrap metal. Return to the traveler to complete the quest.");
            }
            handleQuest();
            break;
    }
}

function tradeWithTraveler() {// trade with traveler function
    console.log("You decide to trade items with the traveler.");
    const travelerItems = ['ammo', 'medkit', 'map'];
    console.log("Traveler's items: " + travelerItems.join(', '));
    console.log("Your items: " + inventory.join(', '));
    const tradeItem = prompt("Enter the item you want to trade: ");
    if (inventory.includes(tradeItem)) {
        inventory.splice(inventory.indexOf(tradeItem), 1);
        travelerItems.push(tradeItem);
        console.log(`You traded ${inventory} with the traveler.`);
        console.log("Traveler's items: " + travelerItems.join(', '));
        console.log("Your items: " + inventory.join(', '));
    } else {
        console.log("You don't have that item in your inventory.");
        console.log("Would you like to trade something else?");
        return;
    }
} 
function handleQuest() {
    console.log("Quest: Gather 10 pieces of scrap metal and bring them back to the traveler.");
    console.log("You need to collect 10 pieces of scrap metal.");
    let scrapsCollected = 0;
    while (scrapsCollected < 10) {
        console.log(`You have collected ${scrapsCollected} pieces of scrap metal.`);
        const scrapFound = Math.random() < 0.5;
        if (scrapFound) {
            console.log("You found a piece of scrap metal!");
            scrapsCollected++;
        } else {
            console.log("You search for scrap metal but find nothing.");
        }
    }
    console.log("You have collected enough scrap metal. Return to the traveler to complete the quest.");
}


// Program

console.log(`Nice to finally meet you ${username}`);
skillDistribution();
console.clear();
console.log(' You awake at Doc Morris`s house, disoriented and unsure how you got there');
console.log('Doc Morris: `Hey i found you almost dead on the side of the road');
console.log("Go and Explore the rooms, gather clues, and confront the secrets lurking in the shadows.");
decisionPoint();// call decision point function
console.clear();// clear console
exploreWasteland();// call explore wasteland function
meetTraveler();// call meet traveler function
tradeWithTraveler();//  call trade with traveler function
console.log('You continue your journey through the wasteland.');// continue journey