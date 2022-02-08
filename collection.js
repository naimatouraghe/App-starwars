const buttons = document.getElementById("buttons")

//***************************COLLECTION PART ****************************************/

//@ts-ignore
function myFetch(data, value) {
    let url = "https://swapi.dev/api/" + value
    let output = ""
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if (value == 'people') {
                //@ts-ignore
                data.results.forEach(item => {
                    output += `
                        <div class="card p-3 m-3" style="opacity:.8">
                            <h4 class ="card-title text-center"> ${item.name}</h4>
                        
                        
                        
                        </div>
                    `
                });
            }
            //@ts-ignore
            results.innerHTML = output
        })
}




buttons.addEventListener('click', e => {

    //@ts-ignore
    let test = myFetch(e.target.innerHTML.trim().toLowerCase())
    console.log("test:", test)
    console.log("mon target:", e.target)
})
