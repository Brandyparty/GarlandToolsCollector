var requirejs = require('requirejs');

requirejs.config({
	//Pass the top-level main.js/index.js require
	//function to requirejs so that node modules
	//are loaded relative to the top-level JS file.
	nodeRequire: require
}); 
requirejs(['node_modules/garlandtools-api/build/garlandtools-api'], function (garlandtools) {
    document.getElementById ("startbutton").addEventListener ("click", start, false);

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
});
