
//    {}
//1 (3 BODA)
//Napisi funkciju koja ispisuje neparne brojeve od 0 do 100


function neparan(){
    for(let i=0; i<100; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}
console.log(neparan());


//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u godisnje u doba. 
//Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Jesen";
//INPUT: 3; OUTPUT: "Ljeto"; 


function pretrazivanje(unos){
    switch(unos){
        case 1:
            console.log("Jesen");            
        break;

        case 2:
            console.log("Proljece");
        break;

        case 3:
            console.log("Ljeto");
        break;

        case 4:
            console.log("Zima");
        break;

        default:
            console.log("Krivo, pokusaj opet!");
    }
}
console.log(pretrazivanje(1));
console.log(pretrazivanje(3));
console.log(pretrazivanje(9));  // Krivo


//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao"
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 39)


function brojUnosa(string) {
    let count=string.length();
    console.log(count);
    return string.split('').reverse().join('');
}
console.log(brojUnosa("Pisanje zadataka nije jednostavan posao"));


//4 (4 BODA)
//Napisi funkciju koja odreduje najdulju vrijednostu u danom objektu
const peopleYouShouldKnow = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}
//INPUT: somePeople
//OUTPUT: "Stroustrup"

function najVrijednost(unos){
    for(let i=0; i<unos.lenght; i++){
        if(unos!=peopleYouShouldKnow[i].Bjarne){
            return peopleYouShouldKnow[i].Bjarne;
        }
    }
}
console.log(najVrijednost("somePeople"));


//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca neproste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [4, 5, 8]

function expers (unos) {

}

console.log(expers([3, 4, 5, 8, 11]));

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja pretvara mala slova danih inputa u velika slova
//INPUT: ["aa", "b1", "", null, "AAA"]
//OUTPUT: ["AA","B1", "", null, "AAA"]

function pretvaranje (unos) {

}

let 

console.log(pretrazivanje(["aa", "b1", 5, 8, 11]));





//6 (4 BODA)
//Napisi funkciju koja vraca sve drzave koji su imali manju temperaturu od one iz ulaznog parametra
const someEvents = [
    {
        stateName: "SAD",
        measuredTemperature: 56.7,
    },
    {
        stateName: "Tunis",
        measuredTemperature: 55,
    },
    {
        stateName: "Irak",
        measuredTemperature: 53.9,
    },
    {
        stateName: "Argentina",
        measuredTemperature: 48.9,
    },
    {
        stateName: "Grcka",
        measuredTemperature: 48.0,
    },
];
//INPUT: (someStates, 48.5)
//OUTPUT: [{stateName: "Grcka", measuredTemperature: 48.0}]

function manjaTemp(unos, broj) {
    for(let i=0; i<unos.lenght; i++){
        if(unos[i])
    }
}
console.log(manjaTemp("someStates", 48.5));
