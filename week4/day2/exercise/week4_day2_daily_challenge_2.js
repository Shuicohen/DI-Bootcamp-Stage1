// Using one loop
let pattern = "";
for (let i = 1; i <= 6; i++) {
    pattern += "* ".repeat(i) + "\n";
}
console.log(pattern)


// Using two loops
for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}