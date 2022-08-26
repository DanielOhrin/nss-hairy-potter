// Define variable with empty array. Will hold pottery to be sold
const potteryForSale = [];

//Define + Export toSellOrNotToSell:
    //accepts potteryObj as parameter
    // if weight >= 6, price = 40
    //if weight < 6 price = 20
    // if pottery is cracked, do not add price
    // if not cracked, add the object to array of items to be sold
export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked === true) {
        return potteryObj;
    } else {
        potteryObj.weight >= 6 ? potteryObj.price = 40 : potteryObj.price = 20;
        potteryForSale.push(potteryObj);
        
        return potteryObj; 
    }
}

// Returns the array of pottery for sale
export const usePottery = () => {
    const forSale = potteryForSale.map(pottery => ({...pottery}));

    return forSale;
}