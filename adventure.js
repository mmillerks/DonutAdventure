class Hero {
    constructor(name, health, weapons, catchPhrases){
        this.name = name;
        this.health = health;
        this.weapons = weapons;
        this.catchPhrases = ['I\'m fresher than day old pizza.',
        'You can\'t count my calories.'];
    }
        talkSass(){
            console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
        }
        announceHealth(){
            console.log(this.health)
        }
        fight(enemy){
            const arr = Object.keys(this.weapons)
            return arr
            //console.log("I\'m ready to rumble.")
        } 
}

const hero1 = new Hero('Dougie the Donut', 100, {
    sprinkleSpray: 5,
    sugarShack: 10
});
        
hero1.talkSass();
hero1.announceHealth();
hero1.fight();
        

//CREATE ENEMY

class Enemy {
    constructor(name, health, weapons){
        this.enemyName = "enemyName";
        this.enemyHealth = "enemyHealth";
        this.enemyWeapons = "enemyWeapons";
        this.enemyCatchPhrases = ['I\'m YouTube famous.', 'I\'m more dangerous than an uncovered sewer.'];
    }
    talkSmack(){
        console.log(this.enemyCatchPhrases[Math.floor(Math.random() * this.enemyCatchPhrases.length)])
    }
    announceEnemyHealth(){
        console.log(this.enemyHealth)
    }
    enemyFight(enemy){
        const arr1 = Object.keys(this.enemyWeapons)
        return arr1
        //I'm pretty sure something isn't right here, but I'm not sure what...
        //console.log("I\'m gonna flatten you like a slice of pepperoni.")
    } 
}

const rat = new Enemy('Pizza Rat', 100, {
    pepperoniStars: 5,
    cheeseGrease: 10
});

rat.talkSmack();
rat.announceEnemyHealth();
rat.enemyFight();


//WALKING DOWN THE STREET

console.log(hero1.talkSass());

console.log(rat.talkSmack());

console.log(hero1.announceHealth());

console.log(rat.announceEnemyHealth());


//FIGHT

//Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
//I think I need an if statement????

//if springSpray => subtract 5 hitpoints from rat.enemyHealth
//but if sugarShack => subtract 10 hitpoints from rat.enemyHeath



//Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')
console.log(rat.name + ' got hit by ' + rat.enemyWeapons + ' ! ' + "His health is now at " + hero1.health + '!');
//I realize that there is more than one enemy weapon, but I'm not sure how to tell it specify the weapon that was used.


//Have Pizza Rat fight Dougie
console.log(rat.enemyFight());

//Have Dougie fight Pizza Rat
console.log(hero1.fight());

//Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!
console.log(rat.announceEnemyHealth());
console.log(hero1.announceHealth());
