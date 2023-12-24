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
  loop()
}

//  Two Params Callback

// function trial2 (callback) {
//   let random = Math.random()
//   if (random > 0.5) {
//     callback(null, 'heads')
//   } else {
//     callback('tails', null)
//   }
// }

// // Call once

// trial2((less, more) => {
//   if (less) {
//     console.log(less)
//     return
//   }
//   console.log(more)
// })

// // Nested call

// trial2((less, more) => {
//   if (less) {
//     console.log(less)
//     return
//   }
//   console.log(more)
// })
// trial2((nestedLess, nestedMore) => {
//   if (nestedLess) {
//     console.log(nestedLess)
//     return
//   }
//   console.log(nestedMore)
// })

// //  Three Params Callback

// function trial3 (callback) {
//   let random = Math.random()
//   if (random > 0.5) {
//     callback(null, 'more than half')
//   } else {
//     callback('less than half', null)
//   }
// }

// trial3((less, more, next) => {
//   if (less) {
//     console.log(less)
//     return
//   }
//   else{
//   console.log(more)
//   }
// })
