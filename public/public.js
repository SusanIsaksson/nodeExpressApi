async function getSomething() {
    
    if (document.getElementById("viewColor").innerHTML) {
        deleteOldColor()
    }   
    const colorToView = await makeRequest("http://localhost:3000/api", "GET")
        for (let i = 0; i < colorToView.length; i++) {
            
            const element = document.createElement('h4')
            element.innerText = colorToView[i].title
           
            document.getElementById("viewColor").appendChild(element)
            console.log(element)
            
        }
}

async function deleteOldColor() { //tar bort "gammal" färglista innan ny presenteras
 
    document.getElementById("viewColor").innerHTML = "";
}

async function postNewColor() {
    if (document.getElementById("inputNewColor").value == "") {
        alert("Du glömde ange en ny färg!")
        return
    }

    let newColor = document.getElementById("inputNewColor").value
    console.log(newColor) 
    const status = await makeRequest("http://localhost:3000/api", "POST", {title: newColor})
    
    deleteInputColor()
    alert ("Din valda färg är nu tillagd i färglistan!")
}

async function deleteInputColor() {
    
    document.getElementById("inputNewColor").value = "";
}

let a = false
async function getFromExternAPI() {
    if (a) {
        return
    }
    a = true
    if (document.getElementById("jokeDiv")) {
        document.getElementById("jokeDiv").innerHTML = "";
    }
    
    let response = await fetch("https://official-joke-api.appspot.com/random_joke")
    let body = await response.json()

    //in the API: setup + punchline
    
    let x = document.createElement("h3")
    x.innerText = body.setup

    let y = document.createElement("h2")
    y.innerText = body.punchline
  
    document.getElementById("jokeDiv").appendChild(x)
    setTimeout(() => {
        document.getElementById("jokeDiv").appendChild(y)
        a = false
    }, 3000); 
   
    

    

}

function clearValue() {
    document.getElementById("").value = ""
}


async function makeRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            headers: {"Content-Type": "application/json"},
            method,
            body: JSON.stringify(body)  //för att komma förbi undefined
        })
        console.log(response)
        const result = await response.json()

        return result

    }   catch(err) {
        console.log(err)
    }
}