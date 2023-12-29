const req = new XMLHttpRequest()

req.onload = function(){
  console.log("IT OPENED!")
  const rawData = this.responseText
  console.log(typeof rawData)
  console.log(rawData)
  const data = JSON.parse(rawData)
  console.log(typeof data)
  console.log(data)
}

req.onerror = function(){
  console.log("ERROR", this)
}

req.open("GET", "https://catfact.ninja/fact")
req.send()