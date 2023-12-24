//Run in a JS playground

// Promise intro

const trial = () => {
  const random = Math.random()
  return new Promise((resolve, reject) => {
    if (random > 0.5) {
      resolve('heads!!')
    } else reject('tails!!')
  })
}

// each call iniitates new promise,
// so some may be rejected and some accepted

// let a = trial()
// let b = trial()
// let c = trial()
// let d = trial()

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// Promises can be chained together
// Res and reject can be used to pass a message

// trial()
//   .then(res => {
//     console.log(res + ' (first go)')
//     return trial()
//   })
//   .then(res => {
//     console.log(res + ' (second go)')
//     return trial()
//   })
//   .then(res => {
//     console.log(res + ' (third go).  You win!')
//     return trial()
//   })
//   .catch(err => console.log(`${err} it's over`))

async function repeatTrial () {
  await trial()
    .then(res => {
      console.log(res + ' (first go)')
      return trial()
    })
    .then(res => {
      console.log(res + ' (second go)')
      return trial()
    })
    .then(res => {
      console.log(res + ' (third go).  You win!')
      return trial()
    })
    .catch(err => console.log(`${err} it's over`))
}

const loop = async () =>{
  for (let i = 0; i < 10; i++) {
    console.log('STARTING A ROUND')
    await repeatTrial()
}}

loop()