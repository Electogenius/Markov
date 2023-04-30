let fs = require("fs")

let d = JSON.parse(fs.readFileSync("data.json", "utf-8"))

let o = [
    "\n"
]

for(let i = 0; i < 5e4; i++){
    const prev2 = o[i - 1] + " " + o[i]

    //console.log(prev2)
    let chance = Math.random() > 0.05
    if(prev2 in d.d && chance){
        o.push(randitem(d.d[prev2]))
        //console.log(prev2, o[i+1])
    }else{
    	o.push(randitem(d.s[o[i]]))
    }
    //console.log(o, i)
}

function randitem(ar){
    return ar[Math.round(Math.random() * (ar.length-1))]
}

fs.writeFileSync("output.txt", o.join(" "))