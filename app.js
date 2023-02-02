
   
const prompt = require('prompt-sync')();


// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);

const landscaping = {
    teeth: 1,
    money: 0
}

let day = 0;

//game stops when money is over 1000
while(landscaping.money <= 1000){
    console.log("lets start the day");

    //start / rest / buy
    console.log(`1. start`);
    console.log(`2. rest`);
    console.log(`3. buy something`);
    let decision = prompt("choose: ");
    //teeth work
    if(decision === '1'){
        console.log("1. Teeth / earns: $1");
        console.log("2. Scissors / earns: $5");
        console.log("3. Push Mower / earns: $10");
        console.log("4. Gas Mower / earns: $20");
        console.log("5. Flamethrow / earns: $75");
        let toolUsed = prompt("choose: ")

        //loop checks if keys are in landscaping object
        for(const key in landscaping){
            if(toolUsed === '1' && key === 'teeth'){
                landscaping.money += landscaping.teeth;
                day++;
                console.log(`day ${day}:  good job on a hard day of work!`);
                console.log(`Nice! we earned $${landscaping.teeth} today!`);
                console.log(`current balance: ${landscaping.money}`);
            }else if(toolUsed === '2' && key === 'scissors'){
                landscaping.money += landscaping.scissors;
                day++;
                console.log(`day ${day}:  good job on a hard day of work!`);
                console.log(`Nice! we earned $${landscaping.scissors} today!`);
                console.log(`current balance: ${landscaping.money}`);
            }else if(toolUsed === '3' && key === 'pushMower'){
                landscaping.money += landscaping.pushMower;
                day++;
                console.log(`day ${day}:  good job on a hard day of work!`);
                console.log(`Nice! we earned $${landscaping.pushMower} today!`);
                console.log(`current balance: ${landscaping.money}`);
            }else if(toolUsed === '4' && key === 'gasMower'){
                landscaping.money += landscaping.gasMower;
                day++;
                console.log(`day ${day}:  good job on a hard day of work!`);
                console.log(`Nice! we earned $${landscaping.gasMower} today!`);
                console.log(`current balance: ${landscaping.money}`);
            }else if(toolUsed === '5' && key === 'flamethrower'){
                landscaping.money += landscaping.flamethrower;
                day++;
                console.log(`day ${day}:  good job on a hard day of work!`);
                console.log(`Nice! we earned $${landscaping.flamethrower} today!`);
                console.log(`current balance: ${landscaping.money}`);
            }else{
                console.log("hey! you dont have that tool!");
            }
            console.clear();
            console.log(landscaping.money);
        }


        //rest
    }else if(decision === '2'){
        console.log("Gonna do some other stuff today!");
        day++

        //buy something
    }else if(decision === '3'){
        console.log(`1. $5 Scissors`);
        console.log(`2. $40 Push Mower`);
        console.log(`3. $150 Gas Mower`);
        console.log(`4. $250 Flamethrower`);
        console.log(`5. main menu`);
        const tools = prompt("choose: ");
        if(tools === '1' && landscaping.money >= 5){
            landscaping.money -= 5
            landscaping.scissors = 5;
            console.log(`Enjoy the new scissors!`);
        }else if(tools === '2' && landscaping.money >= 40){
            landscaping.money -= 40
            landscaping.pushMower = 15;
            console.log(`Enjoy the Push Mower!`);
        }else if(tools === '3' && landscaping.money >= 150){
            landscaping.money -= 150
            landscaping.gasMower = 30;
            console.log();
        }else if(tools === '4' && landscaping.money >= 250){
            landscaping.money -= 250
            landscaping.flamethrower = 75;
        }else if(tools === '5'){
            console.log("main menu");
        }else{
            console.log('not enough money!');
        }
        console.clear()
    }else{
        console.log("Invalid choice! pick 1, 2, or 3!");
    }

}
console.log("We did it!");
console.log(`it took ${day} days and we earned ${landscaping.money} for that Xbox!`);