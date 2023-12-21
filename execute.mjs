import * as io from './methods/io.mjs';
import * as out from './methods/out.mjs';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable


main()

async function main() {
    out.decor(20)

    //file analysis
    //-----------------------------------------------------------------------------//
    try {
        if (!io.isDir('./run/') && !io.isExist('./run/')) {
            throw 'missing folder /run/'
        }
        let totfile = io.getAllFromDir('./run/')

            if (io.containDir('./run/')) {
                throw 'no file founded on /run/'
            }

            totfile.forEach(tag => {

                try {
                    //main and functions analysis
                    //-----------------------------------------------------------------------------//
                    console.log(`Reading file : -${tag}-`)
                    let result = io.JsonArray(`run/${tag}`)
                        //console.log(result)
                        if (!Object.keys(result).includes('main')) {
                            throw 'no main function on file'
                        } else {
                            out.decor(20)
                            console.log('- main function founded')
                        }

                        out.decor(20)
                        if (Object.keys(result).length > 1) {
                            console.log("List of sub-functions : ")
                            Object.keys(result).map(name => {
                                if (name !== 'main')
                                    console.log('- ' + name)
                            })
                        } else {
                            console.log('no sub-functions founded')
                        }
                        out.decor(20)

                        Object.keys(result).map(name => { //OUTPUT MAIN & FUNCTIONS
                            console.log('SECTION : ' + name)
                            console.log(result[name])
                            out.decor(10)
                        })

                        //-----------------------------------------------------------------------------//
                } catch (error) {
                    console.log(error)
                    out.decor(20)
                }

            })

    } catch (error) {
        console.log(error)
        out.decor(20)
        //if(error.message.includes('ENOENT: no such file or directory')){
        //	console.log('Nothing was founded on directory /run')
        //}
    }

}
/*         let blacklist = ['special_lantern.json', 'special_soul_lantern.json']
let blackfound = 0
blacklist.forEach(list => {
totfile.indexOf(list) !== -1 ? (totfile.splice(list, 1), blackfound++) : null;
})
 */

/*
await delay(500);
let bads = ''
if (blackfound > 0) {
bads = `and ${blackfound} ignored files`;
}
let file = ''
if (totfile.length > 1) {
file = 's'
}
console.log(`${totfile.length} File${file} founded ${bads}`)

if (io.mkDir('recipes/')) {
console.log('Directory /recipes/ created')
} else {
console.log('Directory founded')
}

 */

/* 				Object.keys(result).map(name => { //OUTPUT MAIN & FUNCTIONS
console.log('SECTION : '+name)
console.log(result[name])
out.decor(10)
}) */

/*     let ar = io.JsonArray(`tags/${tag}`).values;
let origin = ar[0];
ar.shift();
if (origin == 'chipped:big_lantern' || origin == 'chipped:big_soul_lantern') {
return;
}
console.log(origin)

ar.forEach(result => {

let jsonfile = {
"type": "minecraft:stonecutting",
"count": 1,
"ingredient": {
"item": 'minecraft:' + origin
},
"result": result
}
//console.log(jsonfile)
//console.log(io.mkFile('./recipes/stonecutting_' + result.replace(/[:\s]/g, '_') + '_from_' + origin + '.json', JSON.stringify(jsonfile)))

}) */

//console.log("THE END, GO AWAY!")
/* logo mod o.O
console.log({
"values": [{
"type": "devdyna:addon",
"count": 1,
"ingredient": {
"item": '${chipped}'
},
"result": '${express}'
}
]
})
*/
