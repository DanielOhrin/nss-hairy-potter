//Define and export a function firePottery:
    // 2 parameters, pottery from makePottery and a number (temperature)
    // add property of fired = true
    // if kiln is above 2200 degrees, cracked = true
    // at or below 2200 degrees, cracked = false
export const firePottery = (pottery, temperature) => {
    const firedPottery = pottery;

    firedPottery.fired = true;
    temperature <= 2200 ? firedPottery.cracked = false : firedPottery.cracked = true;

    return firedPottery;
}