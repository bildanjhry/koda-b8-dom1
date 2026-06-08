const inputForm = document.getElementById("form")
const tableWrapper = document.querySelector(".table-data")
const tableBody = document.querySelector("tbody")

function createTable(celcius, fahrenheit){
    const tableRow = document.createElement("tr")
    const tableDataCelcius = document.createElement("td")
    tableDataCelcius.innerText = celcius
    const tableDataFahrenheit = document.createElement("td")
    tableDataFahrenheit.innerText = `${fahrenheit}`
    tableRow.appendChild(tableDataCelcius)
    tableRow.appendChild(tableDataFahrenheit)
    tableBody.appendChild(tableRow)
}

function handleSubmit(e){
    e.preventDefault()
    try{
        const data = new FormData(e.target)
        if(!data.get("calc")) {
            throw new Error("Input Kosong")
        }
        const result = calc(parseInt(data.get("calc")))
        createTable(data.get("calc"), result)
        document.getElementById("calc").value = ""
    }catch(err){
        window.alert(err.message)
    }

}

inputForm.addEventListener("submit", (e) => {handleSubmit(e)})