try{

let fs = require("fs")

f = fs.readFileSync("wkc/list.txt", "utf-8").split("\n")
.filter(h=>h.startsWith(" "))
.map(l => {
	return l.replace(/\(.+\)/, "").replace(/^ +/, "")
})

//f.forEach(e=>add(e))
function add(a){
	fetch("https://en.wikipedia.org/wiki/"+encodeURIComponent(a)).then(e=>e.text())
    .then(content =>{
		console.log(DOMParser)
    })
}
add("America")

}catch(e){console.log(e)}