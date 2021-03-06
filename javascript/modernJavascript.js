console.log('Hello world!');

var age = 26;
age = 27;
age = age + 1;

var health = 0.65;

var isAlive = true;
isAlive = false;

isAlive = 5 > 2;

const pi = 3.14159;
let numberOfLimbs = 4;

var name = "Mia";
var kai = "Kyrin";

let finalString = `${name} is ${age} years old.`;

kai = kai.padEnd(8, '.'); 

let appid = 221380;
//http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=221380&format=xml
//Steam api

var numbers = [1,2,3];
numbers = [1,2];
numbers[1];
numbers[0] = 4;

numbers.includes(4);

var inventory = {'food': 2, 'clothing': 3};
inventory['clothing'] = 4;
inventory['food'];

function sum(number1, number2 = 2) {
    return number1 + number2;
}

var result = sum(1,2);
var result = sum(1);

var result = (number1, number2) => { return number1 + number2};

const promise = new Promise((resolve, reject)=>{
    let number1 = 5;
    if (number1 == 5){
        resolve('Success');
    }
    else{
        reject('Failure');
    }
});

promise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
});

async function sum(number1, number2 = 2) {
    return await number1 + number2;
};

sum(1,2);

var numbers = [1,2,3];
for (let number of numbers){
    console.log(number);
}

var number = 1;
if (number==0){
    console.log('Number is 0');
}else if (number == 1){
    console.log('Number is 1');
}else{
    console.log('Number is something else');
}

const fetch = require('node-fetch');

let url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=221380&format=xml';

class Achievement{
    constructor(name, percent){
        this.name = name;
        this.percent = percent;
    }

    printValues(){

        if(this.percent == 0){
            console.log(`No one has completed the achievement: ${this.name}.`);
        } else {console.log(`${this.name} achievement has been completed by ${this.percent}% of people.`);}
    }
};

async function fetchData(url){
    let response = await fetch(url);
    let jsonResponse = await response.json();
    printData(jsonResponse);
    //console.log(JSON.stringify(jsonResponse));
}

function printData(jsonData){
    var achievementsArray = [];
    let jsonObject = jsonData['achievementpercentages'];
    let allAchievements = jsonObject['achievements'];

    for (let achievement of allAchievements){
        let name = achievement['name'];
        let percent = achievement['percent'];
        let newAchievement = new Achievement(name,percent);

        newAchievement.printValues();
        achievementsArray.push(newAchievement);
        //console.log(name);
    }

    console.log(achievementsArray.length);
}

fetchData(url).catch(function(){
    console.log('Could not fetch Data');
});