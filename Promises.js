//Run in a JS playground 

// Promise demonstration

const trial = () => {
  const random = Math.random();
  return new Promise((resolve, reject) =>{
    if (random > 0.5){
      resolve('more than half!')
    }
    else
    reject('less than half!')
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

trial()
  .then(la => {
    console.log(la + ' success 1!')
    return trial()
  })
  .then(res => {
    console.log(res + ' success 2!')
    return trial()
  })
  .then(res => {
    console.log(res + ' success 3!')
    return trial()
  })
  .catch(err => console.log(err + ' at some point'))

