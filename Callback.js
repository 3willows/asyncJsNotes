const trial = callback => {
  let random = Math.random()
  if (random > 0.5) {
    callback(null, 'more than half')
  } else {
    callback('less than half', null)
  }
}

trial((err, result) => {
  console.log(result)
})

trial((err, result) => {
  console.log(result)
})

trial((err, result) => {
  console.log(result)
})

trial((err, result) => {
  console.log(result)
})

const runTrial = (message, callback) => {
  trial((err, result) => {
    if (err) {
      callback(err)
    } else {
      console.log(result + message)
      callback(null)
    }
  })
}

runTrial('! success 1!', err => {
  if (err) {
    console.log(err + ' at some point')
    return
  }
  runTrial('! success 2!', err => {
    if (err) {
      console.log(err + ' at some point')
      return
    }
    runTrial('! success 3!', err => {
      if (err) {
        console.log(err + ' at some point')
        return
      }
    })
  })
})
