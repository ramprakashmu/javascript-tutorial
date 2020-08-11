// this funtion will trigger hello message

/*
Description:
    this is what multi line comment.
*/
window.userName = "Samson";

var state = "Landon";

function msg() {
    state = 100;
    //alert("Hello Sams : " + (state + 10) + userName);
    return state;
}

function other() {
    let bscope = "Local Scope";
    console.log(bscope);
    const valueNeverChamge = 100;
    console.log(valueNeverChamge);
    var ar = [1, 2, 3, 4];
    //for in loop
    for (a in ar) {
        console.log(a);
    }
    // JSON - Parse - Stringify
}


// In ES6 -- two const and let

