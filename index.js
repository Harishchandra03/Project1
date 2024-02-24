
// Weight Converter
// let btn = document.getElementById("converter")
// btn.addEventListener("click", weightCn)

function weightCn() {
    const inputValue = document.getElementById("inputValue").value;
    const conversion = document.getElementById("conversion").value;
    let result;
    // Gram to Kg
    if (conversion === "gTokg") {
        result = inputValue / 1000;
    }
    //Kg to Gram
    else if (conversion === "kgTog") {
        result = inputValue * 1000;
    }
    const c = document.getElementById("result")
    c.textContent = `Result:${result}`;
}

//Length Converter

let btn = document.getElementById("Converter")
btn.addEventListener("click", lengthCn)

function lengthCn() {
    const InputValue = document.getElementById("InputValue").value;
    const conversiontype = document.getElementById("conversiontype").value;

    let result;
    if (conversiontype === "CmToM") {
        //CentiMeter To Meter
        result = InputValue / 100
    } else if (conversiontype === "MToCm") {
        //Meter To CentiMeter
        result = InputValue * 100
    }
    const d = document.getElementById("Result")
    d.textContent = `Result:${result}`;
}

// Time Converter

let btnn = document.getElementById("Tconverter")
btnn.addEventListener("click", TimeCn)
function TimeCn() {
    const Inputvalue = document.getElementById("Inputvalue").value;
    const Conversiontype = document.getElementById("Conversiontype").value;

    let result;
    if (Conversiontype === "StoM") {
        //Seconds to Minutes
        result = Inputvalue / 60
    } else if (Conversiontype === "MtoS") {
        // Minutes To seconds
        result = Inputvalue * 60
    }
    let p = document.getElementById("ResulT")
    p.textContent = `Result:${result}`
}


