// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 12, 5);
let pot = makePottery("pot", 40, 20);
let cup = makePottery("cup", 8, 8);
let vase = makePottery("vase", 25, 20);
let plate = makePottery("plate", 10, 2);

// Fire each piece of pottery in the kiln
firePottery(mug, 230);
firePottery(pot, 2200);
firePottery(cup, 3000);
firePottery(vase, 5789);
firePottery(plate, 1000);

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list




