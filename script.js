function createTable() {
    //Write your code here
	  let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Convert the input to integers
    rn = parseInt(rn);
    cn = parseInt(cn);
	let table=document.getElementById('myTable')
	 table.innerHTML = "";
	 let tbody = table.createTBody();
	//let thed=table.createTHead();
	  for (let i = 0; i < rn; i++) {
        // Create a new row
        let row = tbody.insertRow();

        for (let j = 0; j < cn; j++) {
            // Create a new cell
            let cell = row.insertCell();
            // Set the text of the cell
            cell.innerText = `Row-${i} Column-${j}`;
        }
    }
}