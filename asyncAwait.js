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
