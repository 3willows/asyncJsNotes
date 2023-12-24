// Async intro

const hello = async () => 'hi'

// async anthing makes it a promise

console.log(typeof hello())

hello()
  .then(data => {
    console.log('resolved with ' + data)
  })
  .catch(data => {
    console.log('problem: ' + data)
  })

async function problem () {
  // throw (Error = 'problem')
  throw "we have a problem!"
}

problem()
  .then(data => {
    console.log('resolved with ' + data)
  })
  .catch(data => {
    console.log('problem: ' + data)
  })

const trial = () => {
  const random = Math.random()
  return new Promise((resolve, reject) => {
    if (random > 0.5) {
      resolve('heads!!')
    } else reject('tails!!')
  })
}

// Without the await, the catch e line will not work.

let print

print = trial()
try {
  print = await trial() 
  console.log(print)
} catch (e) {
  console.log(e)
}

// Use async to achieve a similiar effect

const trialA = async () => {
  const random = Math.random()
  if (random > 0.5) {
    return 'heads!!'
  } else throw 'tails!!'
}


// print = trialA()
// try {
//   print = await trialA() 
//   console.log(print)
// } catch (e) {
//   console.log(e)
// }

// can also use async with .then terminology

trialA()
  .then(res => {
    console.log(res + ' (first go)')
    return trialA()
  })
  .then(res => {
    console.log(res + ' (second go)')
    return trialA()
  })
  .then(res => {
    console.log(res + ' (third go).  You win!')
    return trialA()
  })
  .catch(err => console.log(`${err} it's over`))
  