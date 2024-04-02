import registros from './content.js';
import * as fs from 'fs';

let data =  [];
let rows = registros.split("\n");
rows.forEach(item => {
    let columns = item.split("\t");
    if(columns.length === 9){
        let d = {
            "contract": columns[0],
            "client": columns[1],
            "phone_one": columns[2],
            "phone_two": columns[3],
            "plan": columns[4],
            "address": columns[5],
            "period": columns[6],
            "month": columns[7],
            "year": columns[8]
        };
        data.push(d);
    }
});

fs.writeFile('./output.json', JSON.stringify(data), err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
});