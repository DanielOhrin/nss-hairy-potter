// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 12, 5);
let pot = makePottery("pot", 40, 20);
let cup = makePottery("cup", 8, 8);
let vase = makePottery("vase", 25, 20);
let plate = makePottery("plate", 10, 2);

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




