let a = 45

const promise = new Promise((res) => {
    setTimeout(() => {
        res(a=67)
    },3000)
})
.then(() => console.log(a))

console.log(a);