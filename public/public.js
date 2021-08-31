function helloName() {
    //get the value of the input id="nameInput"
    let x = document.getElementById("nameInput").value;
    
    //if nameInput is not set
    if (x == "") {
        alert("Please enter your name!");
    } else {
        document.getElementById("hello").innerHTML = "Välkommen " + x;
        //alert ("Välkommen " + x);
    }
}

async function getSomething() {
    console.log("GET")
    const colorToView = await makeRequest("http://localhost:3000/api", "GET")
        for (let i = 0; i < colorToView.length; i++) {
            const element = document.createElement('h4')
            element.innerText = colorToView[i].title

            document.getElementById("viewColor").appendChild(element)
            console.log(element)

        }
}

async function postNewColor() {
    console.log("NY POST")
    let newColor = document.getElementById("inputNewColor").value
    console.log(newColor) 
    const status = await makeRequest("http://localhost:3000/api", "POST", {title: newColor})
    console.log(status) 
}

async function getFromExternAPI() {
    console.log("GET API")
    let response = await fetch("https://official-joke-api.appspot.com/random_joke")
    let result = await response.json()
    console.log(result) 
    
    

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