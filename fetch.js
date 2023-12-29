// const promise = fetch('https://catfact.ninja/fact')

// promise
// .then(res => {
//   console.log('CAT RESOLVED!!!', typeof res, res)
//   return res.json()
// })
// .then(res => {
//   console.log('CAT RESOLVED 2!!!', typeof res, res, res.fact)
// })
//   .catch(err => {
//     console.log('ERROR', err)
//   })

// // Practise promisify() here later?

const base = 'https://swapi.dev/api/'

// const starWarsApi = fetch(base)

// starWarsApi
//   .then(res => {
//     console.log('STARS RESOLVED 1!!! first level type', typeof res, res)
//     return res.json()
//   })
//   .then(res => {
//     console.log('STARS RESOLVED 2!!! second level type ', typeof res, res, res.planets)
//     return fetch(res.planets)
//   })
//   .then(res => {
//     console.log('STARS RESOLVED 3!!! first level type', typeof res, res)
//     return res.json()
//   })
//   .then(res => {
//     console.log('STARS RESOLVED 4!!! second level type ', typeof res, res, res.results)
//     return fetch('https://catfact.ninja/fact')
//   })
//   .then(res => {
//     console.log('CAT AGAIN!!! first level type', typeof res, res)
//     return res.json()
//   })
//   .then(res => {
//     console.log('CAT 2 AGAIN!!! second level type ', typeof res, res, res.fact)
//   })
//   .catch(err => {
//     console.log('ERROR', err)
//   })

const loadStarWarsPeople = async function () {
  try {
    const res = await fetch(base + 'people/1/')
    const data = await res.json()    
    // cannot read this again.  After the await, the promise is resolved to an Object, so cannot await yet again
    // const data3 = await res.json()
    console.log(typeof data, data)
    const res2 = await fetch(data.films[0])
    const data2 = await res2.json()
    console.log(data2)
  } catch (e) {
    'ERROR!!!', e
  }
}

loadStarWarsPeople()
