'use strict'

let input = "";
let total = 0;
let calc = "+";
let frag = 1;

function number (data) {
    if (total === 0) {
        frag = 0;
        input = input + data;
        document.form.output.value = input;
    } 
    
    if (frag === 1){
        frag = 0;
        input = "";
        input = input + data;
        document.form.output.value = input;
    } else if (frag === 0 && total !== 0) {
        frag = 0;
        input = input + data;
        document.form.output.value = input;
    }
}

function calculate (data) {
    if (data === "=") {
        total = total + calc + input;
        total = eval(total);
        document.form.output.value = total;
        return;
    }

    if (total === 0) {
        frag = 1;
        total = input;
        calc = data;
    } else {
        frag = 1;
        total = total + calc + input;
        total = eval(total);
        document.form.output.value = total;
        calc = data;
    }

}

function textClear () {
    input = "";
    total = 0;
    calc = "+";
    frag = 1;

    document.form.output.value = input;
}

