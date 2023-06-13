const weight = prompt('Eneter your weight in kilograms')
const height = prompt('Enter your height in meters')

const bodeMassIndex = weight / Math.pow(height, 2)

const areYourOverweight = bodeMassIndex >= 25

console.log(bodeMassIndex);
console.log(areYourOverweight);

alert('Are Your Over weight?' + areYourOverweight)