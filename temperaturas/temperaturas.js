//Celsius para Fahrenheit: F = C * 1.8 + 32
const temperatura = {
    celsius_para_fahrenheit : function(c = window.prompt("Temperatura em Celsius")) {
        let f = c * 1.8 + 32;
        document.getElementById("id1").innerHTML = f + "°F";
    },
//Fahrenheit para Celsius: C = 5 / 9 * (fahrenheit - 32)
    fahrenheit_para_celsius: function(f = window.prompt("Temperatura em Fahrenheit")) {
        let c = 5 / 9 * (f - 32);
        document.getElementById("id1").innerHTML = c + "°C";
    },
//Celsius para Kelvin K = C + 273.15
/*Obs.: Necessário atribuir o valor de c multiplicado por 1 pra evitar que o JavaScript entenda como "string"*/
    celsius_para_kelvin: function(c = window.prompt("Temperatura em Celsius")) {
        let k = c * 1 + 273.15;
        document.getElementById("id1").innerHTML = k + "°K";
    },
//Kelvin para Celsius C = K - 273
    kelvin_para_celsius: function(k = window.prompt("Temperatura em Kelvin")) {
        let c = k - 273;
        document.getElementById("id1").innerHTML = c + "°C";
    },
//Kelvin para Fahrenheit (K - 273.15) * 9 / 5 + 32
    kelvin_para_fahrenheit: function(k = window.prompt("Temperatura em Kelvin")) {
        let f = (k - 273.15) * 9 / 5 + 32;
        document.getElementById("id1").innerHTML = f + "°F";
    },
//Fahrenheit para Kelvin (F - 32) * 5 / 9 + 273.15
    fahrenheit_para_kelvin: function(f = window.prompt("Temperatura em Fahrenheit")) {
        let k = (f - 32) * 5 / 9 + 273.15;
        document.getElementById("id1").innerHTML = k + "°K";
    },
//Celsius para Rankine C * 9 / 5 + 491.67
    celsius_para_rankine: function(c = window.prompt("Temperatura em Celsius")) {
        let r = c * 9 / 5 + 491.67
        document.getElementById("id1").innerHTML = r + "°R";
    },
//Rankine para Celsius (R - 491.67) * 5 / 9
    rankine_para_celsius: function(r = window.prompt("Temperatura em Rankine")) {
        let c = (r - 491.67) * 5 / 9
        document.getElementById("id1").innerHTML = c + "°C";
    },
//Rankine para Fahrenheit R - 459.67
    rankine_para_fahrenheit: function(r = window.prompt("Temperatura em Rankine")) {
        let f = r - 459.67;
        document.getElementById("id1").innerHTML = f + "°F";
    },
//Fahrenheit para Rankine F + 459,67
/*Obs.: Necessário atribuir o valor de f multiplicado por 1 pra evitar que o JavaScript entenda como "string"*/
    fahrenheit_para_rankine: function(f = window.prompt("Temperatura em Fahrenheit")) {
        let r = f * 1 + 459.67;
        document.getElementById("id1").innerHTML = r + "°R";
    },
//Rankine para Kelvin R * 5 / 9
    rankine_para_Kelvin: function(r = window.prompt("Temperatura em Rankine")) {
        let k = r * 5 / 9;
        document.getElementById("id1").innerHTML = k + "°K";
    },
//Kelvin para Rankine K * 1.8;
    Kelvin_para_rankine: function(k = window.prompt("Temperatura em Kelvin")) {
        let r = k * 1.8;
        document.getElementById("id1").innerHTML = r + "°R";
    },
//Celsius para Réaumur Re = C * 4 / 5
    celsius_para_reaumur: function(c = window.prompt("Temperatura em Celsius")) {
        let re = c * 4 / 5;
        document.getElementById("id1").innerHTML = re + "°Ré";
    },
//Réaumur para Celsius C = Re * 5 / 4
    reaumur_para_celsius: function(re = window.prompt("Temperatura em Réaumur")) {
        let c = re * 5 / 4;
        document.getElementById("id1").innerHTML = c + "°C";
    },
//Kelvin para Réaumur Re = (K - 273.15) * 4 / 5
    kelvin_para_reaumur: function(k = window.prompt("Temperatura em Kelvin")) {
        let re = (k - 273.15) * 4 / 5;
        document.getElementById("id1").innerHTML = re + "°Ré";
    },
//Réaumur para Kelvin K = Re * 5 / 4 + 273.15
    reaumur_para_kelvin: function(re = window.prompt("Temperatura em Réaumur")) {
        let k = re * 5 / 4 + 273.15;
        document.getElementById("id1").innerHTML = k + "°K";
    },
//Fahrenheit para Réaumur Re = (F - 32) * 4 / 9
    fahrenheit_para_reaumur: function(f = window.prompt("Temperatura em Fahrenheit")) {
        let re = (f - 32) * 4 / 9;
        document.getElementById("id1").innerHTML = re + "°Ré";
    },
//Réaumur para Fahrenheit F = Re * 9 / 4 + 32
    reaumur_para_fahrenheit: function(re = window.prompt("Temperatura em Réaumur")) {
        let f = re * 9 / 4 + 32;
        document.getElementById("id1").innerHTML = f + "°F";
    },
//Rankine para Réaumur Re = (R - 491.67) * 4 / 9
    rankine_para_reaumur: function(r = window.prompt("Temperatura em Rankine")) {
        let re = (r - 491.67) * 4 / 9;
        document.getElementById("id1").innerHTML = re + "°Ré";
    },
//Réaumur para Rankine Ra = Re * 9 / 4 + 491.67
    reaumur_para_rankine: function(re = window.prompt("Temperatura em Réaumur")) {
        let r = re * 9 / 4 + 491.67;
        document.getElementById("id1").innerHTML = r + "°R";
    }
};

document.write(Date());