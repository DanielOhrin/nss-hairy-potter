// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 12, 5);
let pot = makePottery("Pot", 40, 20);
let cup = makePottery("Cup", 8, 8);
let vase = makePottery("Vase", 25, 20);
let plate = makePottery("Plate", 10, 2);

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 230);
const firedPot = firePottery(pot, 2200);
const firedCup = firePottery(cup, 3000);
const firedVase = firePottery(vase, 5789);
const firedPlate = firePottery(plate, 1000);

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug);
toSellOrNotToSell(firedPot);
toSellOrNotToSell(firedCup);
toSellOrNotToSell(firedVase);
toSellOrNotToSell(firedPlate);

const forSale = usePottery();

console.log(forSale);

// Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector(".potteryList");

parentHTMLElement.innerHTML = PotteryList();

console.log(parentHTMLElement.innerHTML)





