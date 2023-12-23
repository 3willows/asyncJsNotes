//Run in a JS playground 

// Callbacks demonstration

const trial = (func, value) => {
  (value) => {
    if (value > 0.5){
      console.log('more than half')
    }
    else
    console.log('less than half')
  }
}

// each call iniitates new promise, 
// so some may be rejected and some accepted

let a = trial()
let b = trial()
let c = trial()
let d = trial()

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// Promises can be chained together

trial()
  .then(res => {
    console.log(res + '! success 1!')
    return trial()
  })
  .then(res => {
    console.log(res + '! success 2!')
    return trial()
  })
  .then(res => {
    console.log(res + '! success 3!')
    return trial()
  })
  .catch(err => console.log(err + ' at some point'))

