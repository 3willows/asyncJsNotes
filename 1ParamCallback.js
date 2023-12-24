//  Single Param Callback

const trial = callback => {
  let random = Math.random()
  let result
  if (random > 0.5) {
    result = callback('heads')
  } else {
    result = callback('tails')
  }
  return result
}

// Call the callback function with annoymous function

// console.log(trial(soleParam => {
//   return soleParam
// }))

// This is the same as calling it with a named function

const simpleReturn = soleParam => {
  return soleParam
}

// console.log(trial(simpleReturn))
// Nesting takes place purely by outside logic

const loop = () => {
  while (true) {
    let result
    result = trial(simpleReturn)
    console.log(result)
    if (result === 'tails') {
      console.log(`it's over!`)
      return
    }
  }
}

for (let i = 0; i < 5; i++) {
  console.log("START A ROUND")
  loop()
}
