// from data.js
var tableData = data;


let tbody = d3.select("tbody");

function buildTable(data){

    tbody.html("");

    data.forEach((dataRow) => {

        let row = tbody.append("tr");
               
        Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    })
}

// create function to filter by date input
function handleClick() {
    let dateInput = d3.select("#datetime").property("value")
    let filteredData = data.filter((a) => a.datetime === dateInput)

buildTable(filteredData)
}

// pass id for button and function to click
d3.select("#filter-btn").on("click", handleClick)


buildTable(tableData);
