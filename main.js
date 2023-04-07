//const garlandtools = require('garlandtools-api');
import * as  garlandtools from 'garlandtools-api';

async function start()
{
    alert("hi");
    
    let itemInputValue = document.getElementById ("itemnameOrIds").value;
    
    if (itemInputValue.indexOf(",") > -1 || !isNaN(parseFloat(itemInputValue))) {
        alert("number");

        let numbers = itemInputValue.split(",");
    } else {
        let item = (await garlandtools.search("hempen yarn"))[0].obj.n // "Hempen Yarn"

        alert(item);
    }
}

module.exports = start;
