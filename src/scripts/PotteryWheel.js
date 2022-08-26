//Define a variable to have the primary key for each piece of pottery. Initial value = 1;
const initialValue = 1;

//Define and export a function makePottery:
    //Accept 3 parameters (shape, weight, height)
    // Return an object with shape, weight, height, and id 
    //* ID should use a generator function that adds 1 each time its called.
    let idValue = 0;

    const idMaker = function* () {
        yield idValue++;
    }
    
    export const makePottery = (shapeString, weightNum, heightNum) => {
        
    const potteryObject = {
        shape: `${shapeString}`,
        weight: weightNum,
        height: heightNum,
        id: idMaker().next().value
    }
    
    return potteryObject
}

