import chalk from "chalk";
import inquirer from "inquirer";
class Player{
    name: string
    fuel: number = 100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrase(){
        this.fuel = 100
    }
}
class Opponent{
    name: string;
    fuel: number = 100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
let player: any = await inquirer.prompt ({
    
        type: "input",
        name: "name",
        message: "Enter Your Name:"
})



let opponent: any = await inquirer.prompt({
    type: "list",
    name: "select",
    choices: ["Skeleton", "Zombie","Ninja"],
    message: "Select Your Opponent:"
})
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.name);

do{
    if (opponent.select == "Skeleton")


{

    
    let ask = await inquirer.prompt({
        type: "list",
        name: "option",
        choices: ["Attack", "Drink portion","Run for Your Life..."],
        message: "Select Your Opponent:"
        
    });
if(ask.option == "Attack"){
    let num =Math.floor(Math.random() * 2)
    if (num > 0) {
       p1.fuelDecrease() 
       console.log(chalk.bold.red(`${p1.name}fuel is: ${p1.fuel}`))
       console.log(chalk.bold.green(`${o1.name}fuel is: ${o1.fuel}`))
        if(p1.fuel<= 0){
            console.log(chalk.red.bold.italic("you lose better luck next time "));
            process.exit()
        }
    }
    if (num <= 0) {
        o1.fuelDecrease() 
        console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}`))
       console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`))
       if(o1.fuel<= 0){
        console.log(chalk.green.bold.italic("you win "));
        process.exit()
        
    }
    }
}
if(ask.option  == "Drink portion" ){
    p1.fuelIncrase()
    console.log(chalk.bold.italic.green(`you drink health portion  your
    fuel is ${p1.fuel}`));
}
if(ask.option  == "Run for Your Life..." ){
    console.log(chalk.red.bold.italic("you lose better luck next time "));
    process.exit()
}
 

   }
   // zombie
   if (opponent.select == "Zombie")


{

    
    let ask = await inquirer.prompt({
        type: "list",
        name: "option",
        choices: ["Attack", "Drink portion","Run for Your Life..."],
        message: "Select Your Opponent:"
        
    });
if(ask.option == "Attack"){
    let num =Math.floor(Math.random() * 2)
    if (num > 0) {
       p1.fuelDecrease() 
       console.log(chalk.bold.red(`${p1.name}fuel is: ${p1.fuel}`))
       console.log(chalk.bold.green(`${o1.name}fuel is: ${o1.fuel}`))
        if(p1.fuel<= 0){
            console.log(chalk.red.bold.italic("you lose better luck next time "));
            process.exit()
        }
    }
    if (num <= 0) {
        o1.fuelDecrease() 
        console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}`))
       console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`))
       if(o1.fuel<= 0){
        console.log(chalk.green.bold.italic("you win "));
        process.exit()
        
    }
    }
}
if(ask.option  == "Drink portion" ){
    p1.fuelIncrase()
    console.log(chalk.bold.italic.green(`you drink health portion  your
    fuel is ${p1.fuel}`));
}
if(ask.option  == "Run for Your Life..." ){
    console.log(chalk.red.bold.italic("you lose better luck next time "));
    process.exit()
}
 

   }
 // ninja
   if (opponent.select == "Ninja")


{

    
    let ask = await inquirer.prompt({
        type: "list",
        name: "option",
        choices: ["Attack", "Drink portion","Run for Your Life..."],
        message: "Select Your Opponent:"
        
    });
if(ask.option == "Attack"){
    let num =Math.floor(Math.random() * 2)
    if (num > 0) {
       p1.fuelDecrease() 
       console.log(chalk.bold.red(`${p1.name}fuel is: ${p1.fuel}`))
       console.log(chalk.bold.green(`${o1.name}fuel is: ${o1.fuel}`))
        if(p1.fuel<= 0){
            console.log(chalk.red.bold.italic("you lose better luck next time "));
            process.exit()
        }
    }
    if (num <= 0) {
        o1.fuelDecrease() 
        console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}`))
       console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`))
       if(o1.fuel<= 0){
        console.log(chalk.green.bold.italic("you win "));
        process.exit()
        
    }
    }
}
if(ask.option  == "Drink portion" ){
    p1.fuelIncrase()
    console.log(chalk.bold.italic.green(`you drink health portion  your
    fuel is ${p1.fuel}`));
}
if(ask.option  == "Run for Your Life..." ){
    console.log(chalk.red.bold.italic("you lose better luck next time "));
    process.exit()
}
 

   }
}


while(true)

