const age =15

if (age >= 18) {
    console.log('You can watch this video');    
} else {
    // console.log('You can not watch this video'); 
    const yearsLeft = 18 - age;
    console.log(`You ara to young. You can watch this video after ${yearsLeft} years later`);
}