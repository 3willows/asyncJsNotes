//  Three Params Callback

function trial3 (callback) {
  let random = Math.random()
  let result
  if (random > 0.5) {
    result = callback(null, 'heads', trial3)
  } else {
    result = callback('tails', null, null)
  }
  return result
}

// Recursive return

const simpleNextReturn = function (err, res, doNext) {
  if (res) {
    console.log(res)
    doNext && doNext(simpleNextReturn)
  } else {
    console.log(err)
  }
}

// Call 10 times

for (let i = 0; i < 100; i++) {
  console.log('START A ROUND')
  trial3(simpleNextReturn)
}
