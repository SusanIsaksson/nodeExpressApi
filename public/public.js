
function getSomething() {
    console.log("GET")

}


function postSomething() {
    console.log("POST")
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