// copy and paste the example at the start of the docs, adopt for use in browswer not Node

// console.log("type of axios is", typeof axios, axios)

// Make a request for a user with a given ID

function wrapper () {
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
}

// wrapper()

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

// catFact()

// Sometimes catFact finishes first, sometimes wrapper finishes first!!!  Go figure!  Maybe the only way to ensure one after the other is to chain them in some kind of .then or async function

const getDadJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    const response = await axios.get('https://icanhazdadjoke.com/', config)
    // console.log(response)
    return response.data.joke
  } catch (error) {
    console.error(error)
  }
}

const button = document.querySelector('button')
const ul = document.querySelector('ul')

button.addEventListener('click', async () => {
  console.log('hi, hold on and let the bullets fly!')
  console.log(await getDadJoke())
  const newLi = document.createElement('li')
  newLi.innerText = await getDadJoke()
  ul.appendChild(newLi)
})
