let fs = require("fs")

let entry = fs.readFileSync("ultra/temp.txt", "utf-8")
, prev = fs.readFileSync("ultra/corpus.txt", "utf-8")
fs.writeFileSync("ultra/corpus.txt", prev + "\n" + entry)
fs.writeFileSync("ultra/temp.txt", "")