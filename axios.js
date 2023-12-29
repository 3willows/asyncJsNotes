// copy and paste the example at the start of the docs, adopt for use in browswer not Node

// console.log("type of axios is", typeof axios, axios)

// Make a request for a user with a given ID
axios
  .get('https://catfact.ninja/fact')
  .then(function (response) {
    // handle success; in other words already prased JSON and made a JS object
    console.log(`RESPONSE HERE: ${JSON.stringify(response.data)}`)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(function () {
    // always executed
    console.log('alawys here for you!')
  })

// Optionally the request above could also be done as
// axios
//   .get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
//   .finally(function () {
//     // always executed
//   })

// Want to use async/await? Add the `async` keyword to your outer function/method.

async function catFact () {
  try {
    const response = await axios.get('https://catfact.ninja/fact')
    console.log(`ANOTHER RESPONSE HERE: ${JSON.stringify(response.data)}`)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('catFact still here for you')
    // compare this!
    console.error('catFact still here for you')
  }
}

catFact()

// Sometimes catFact finishes first, sometimes the earlier axios.get('https://catfact.ninja/fact') finishes first!!!  Go figure!