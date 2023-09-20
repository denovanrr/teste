import Decimal from "break_infinity.js";
const clicker = {
    generics:0,
    upgrades:{
        genericmachine:{
            amount:0,
            gps: 1,
            name:"criadora de numeros"
        }
    }
};
function thing_clicked(thing){
    clicker.upgrades[i].amount++;
    update_upgrades();
}
function update_upgrades(){
    document.querySelector("#upgrades").innerHTML="";
    for(i in clicker.upgrades){
        document.querySelector("#upgrades").innerHTML+=`<br><button onclick="thing_clicked('${i}')">${clicker.upgrades[i].name}</button>`
    }
}

function updatecount(){
    update_upgrades();
    setInterval(() =>{
        for(i in clicker.upgrades){
            clicker.generics+=clicker.upgrades[i].amount*clicker.upgrades[i].gps*clicker.generics/20;
            clicker.upgrades[i].amount+=clicker.upgrades[i].amount*clicker.upgrades[i].gps*clicker.generics/20;
        }
        document.querySelector("#generics").innerHTML=String(clicker.generics);
    },50);
}