async function getRandomJoke(){
    const res = await fetch("https://official-joke-api.appspot.com/jokes/random")
    const json_result = await res.json();
    console.log(json_result)

    document.getElementById("getSetup").innerHTML = json_result.setup;
    document.getElementById("getPunchline").innerHTML = json_result.punchline;
}

getRandomJoke()