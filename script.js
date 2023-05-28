
        function convert() {
            const temperature = document.getElementById("temperature").value;
            const fromUnit = document.getElementById("from-unit").value;
            const toUnit = document.getElementById("to-unit").value;
        
            let result;
            if (fromUnit === "celsius" && toUnit === "kelvin") {
                result = parseFloat(temperature) + 273.15;
            } else if (fromUnit === "kelvin" && toUnit === "celsius") {
                result = parseFloat(temperature) - 273.15;
            } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
                result = (parseFloat(temperature) * 9 / 5) + 32;
            } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
                result = (parseFloat(temperature) - 32) * 5 / 9;
            } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
                result = (parseFloat(temperature) - 273.15) * 9 / 5 + 32;
            } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
                result = (parseFloat(temperature) - 32) * 5 / 9 + 273.15;
            } else {
                result = parseFloat(temperature);
            }
        
            document.getElementById("result").innerHTML = result.toFixed(2) + " " + toUnit;
        }
        