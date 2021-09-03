async function getSomething() {
    console.log("GET")
    if (document.getElementById("viewColor").innerHTML) {
        delOldColor()
    }   
    const colorToView = await makeRequest("http://localhost:3000/api", "GET")
        for (let i = 0; i < colorToView.length; i++) {
            
            const element = document.createElement('h4')
            element.innerText = colorToView[i].title
           
            document.getElementById("viewColor").appendChild(element)
            console.log(element)
            
        }
}

async function delOldColor() {
    console.log("Ta bort gammal")
    document.getElementById("viewColor").innerHTML = "";
}

async function postNewColor() {
    console.log("NY POST")
    let newColor = document.getElementById("inputNewColor").value
    console.log(newColor) 
    const status = await makeRequest("http://localhost:3000/api", "POST", {title: newColor})
    console.log(status) 
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
    console.log("GET API")
    let response = await fetch("https://official-joke-api.appspot.com/random_joke")
    let body = await response.json()
    //setup + punchline
    console.log(body.setup)
    setTimeout(() => {
    console.log(body.punchline)
    }, 1000);
    

    let x = document.createElement("h4")
    x.innerText = body.setup

    let y = document.createElement("h2")
    y.innerText = body.punchline
    //setTimeout(body.punchline, 3000);

    document.getElementById("jokeDiv").appendChild(x)
    setTimeout(() => {
        document.getElementById("jokeDiv").appendChild(y)
        a = false
    }, 1000); 
   
    

    

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