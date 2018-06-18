console.log('Javascript is linked');


//Answer the following: 

//1. Boolean
//2. String
//3. Object
//4. Array
//5. An Array of Objects
//6. An Array of Objects


//Take it Easy

//1. Make an arry of all the colors of the rainbow
const rainbowArray = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

//2. Access 'Blue' from the array
console.log(rainbowArray[4]);

//3. Make an object about yourself
const yourName = {
	favoriteFood: 'Pizza',
	hobby: 'Wakeboarding',
	hometown: 'Vienna',
	favDataType: 'Boolean'
};

//4. Acesse your favorite hobby
console.log(yourName.hobby);

//Crazy Object!


const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

//1.log "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

//2. log "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

//3. log "Sweating at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

//4. log "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

//5. log the object that containts the name "funkhauser"
console.log(crazyObject.larry.characters[1]);


//Object-ception
//change the value of limbo to null
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);


















