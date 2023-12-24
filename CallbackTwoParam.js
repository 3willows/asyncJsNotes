//  Two Params Callback

function trial2 (callback) {
  let random = Math.random()
  if (random > 0.5) {
    return callback(null, 'heads')
  } else {
    return callback('tails', null)
  }
}

// Call once

const simpleReturn = (err, res) =>{
  if (res) {
    return res
  } else
  return err
}

console.log(trial2(simpleReturn))

// Try to make recursive

function trial2R (callback) {
  let random = Math.random()
  if (random > 0.5) {
    trial2R(callback)
    return callback(null, 'heads')
  } else {
    return callback('tails', null)
  }
}
