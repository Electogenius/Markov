let fs = require("fs")

let corpus = fs.readFileSync(
    "c.txt", 
    "utf-8").replace(/([?!.,\n()\[\]{}\/"'”“’‘:;]) ?/g, " $1 ")


//const corpus = "a cat in the box in the cat in a box".split(" ")

const log = e => console.log(e)

//output data
let d = {
    d: {//double

    },
    s: {//single

    }
}

function train(c) {
    //log(c)
    c = c.split(" ")
    for (let i = 0; i < c.length; i++) {
        //let prevslot = d.s[c[i - 1]]
        if (!d.s[c[i - 1]]) d.s[c[i - 1]] = []
        if (typeof d.s[c[i - 1]] == "object")
            d.s[c[i - 1]].push(c[i])

        if (i < 2) continue;

        let name = c[i - 2] + " " + c[i - 1]
        if (!d.d[name]) d.d[name] = []
        d.d[name].push(c[i])
    }
}
try {
    train(corpus)
} catch (e) {
    console.log(e)
}
//log(d.d)

fs.writeFileSync("data.json", JSON.stringify(d))

