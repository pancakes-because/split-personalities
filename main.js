const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const splitDisorderFormat = originalDisorderFormat.split(`|$|`)
console.log(splitDisorderFormat)

//Tyler said it was a "mistake" in the instructions for the answer to look "stacked"
//The answer should look like a "line"
//Here's the answer 
const joinWithDiv = splitDisorderFormat.join(`<div></div>`)
console.log(joinWithDiv)

//If you want it "stacked"...
// for (const disorder of splitDisorderFormat) {
//     console.log(`<div>${disorder}</div>`)
// }

//Truth is, the "stacked" answer is also correct in some scenarios 