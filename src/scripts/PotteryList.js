import { usePottery } from "./PotteryCatalog.js";
//Define + export PotteryList:
    //Get the items to be sold from usePottery()
    // Convert each object to HTML representation. Use provided template
    // return a single string that contains ALL of the HTML representation
export const PotteryList = () => {
    let list = ``;
    const potteryArr = usePottery();
    console.log(potteryArr);
    for (const pottery of potteryArr) {
        list += `<section class="pottery" id="pottery--${pottery.id}">
        <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
        <div class="pottery__price">Price is $${pottery.price}</div>
      </section>`
    }

    return list;
}