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
        fight(){
            console.log("I\'m ready to rumble.")
        } 
}

const hero1 = new Hero('Dougie the Donut', 100, {
    sprinkleSpray: 5,
    sugarShack: 10
});
        
hero1.talkSass();
hero1.announceHealth();
hero1.fight();
        
    