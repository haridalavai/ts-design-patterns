console.log("tables");
let tables = document.querySelectorAll("table");
console.log(tables);

//  return max number of cells in a all tables

let max = 0;
for (let table of tables) {
  // get rows of the table
  let cells = 0;
  let rows = table.querySelectorAll("tr");
  for (let row of rows) {
    cols = row.querySelectorAll("td");
    console.log(cols);
    cells += cols.length;
  }
  if (cells > max) {
    max = cells;
  }
}

console.log(max);
