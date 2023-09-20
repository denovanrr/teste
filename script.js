import Decimal from "break_eternity.js";
const generics=0;
const upgrades={
genericmachine:{
amount:0,
gps: 1,
name:"criadora de numeros"
}
};
function thing_clicked(thing){
    upgrades[i].amount++;
    update_upgrades();
}
function update_upgrades(){
    document.querySelector("#upgrades").innerHTML="";
    for(i in upgrades){
        document.querySelector("#upgrades").innerHTML+=`<br><button onclick="thing_clicked('${i}')">${upgrades[i].name}</button>`
    }
}

function updatecount(){
    update_upgrades();
    setInterval(() =>{
        for(i in clicker.upgrades){
            generics+=upgrades[i].amount*upgrades[i].gps*generics/20;
            upgrades[i].amount+=upgrades[i].amount*upgrades[i].gps*generics/20;
        }
        document.querySelector("#generics").innerHTML=String(generics);
    },50);
}