
// ANSWER THE FOLLOWING

// 1. Boolean
    let lightSwitch;
      if (lightSwitch === 'on') {
        console.log(true)
      } else {
        console.log(false)
      };

// 2. String
    'ronaldtclark@gmail.com'

// 3. Array of strings
    const spaceShip = ['hull', 'laser blasters', 'tractor beam', 'warp drive'];

// 4. Array of strings
    const classmates = ['Ron', 'Badal', 'Jay', 'Stephanie', 'Eugene'];

// 5. Object of strings
    const classmateLocations = {
      Ron: 'Chicago',
      Badal: 'New York',
      Jay: 'Phoenix', 
      Stephanie: 'Seattle', 
      Eugene: 'Los Angeles'
    };

// 6. Object of objects of strings and arrays of strings
    const classmateInfo = {
      Ron: { 
        location: 'Chicago',
        favTvShows: ['Breaking Bad', 'The Office']
      },
      Badal: {
        location: 'New York',
        favTvShows: ['How I Met Your Mother', 'Parks & Rec']
      },
      Jay: {
        location: 'Phoenix', 
        favTvShows: ['Seinfeld', 'Star Trek']
      },
      Stephanie: {
        location: 'Seattle', 
        favTvShows: ['One Tree Hill', 'Smallville']
      },
      Eugene: {
        location: 'Los Angeles',
        favTvShows: ['Murder She Wrote', 'Golden Girls']
      }
    };



// TAKE IT EASY

// 1.
    const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
// 2.
    rainbow[4]
// 3.
    const ronClark = {
      favoriteFood: 'pizza',
      hobby: 'Dungeons & Dragons',
      currentLocation: 'Chicago',
      favoriteDatatype: 'Objects'
    };
// 4.
    ronClark.hobby



// CRAZY OBJECT!

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
};

// 1.
    console.log(crazyObject.taco[1].salsa[5]);

// 2.
    console.log(crazyObject.larry.quotes[0]);

// 3.
    console.log(crazyObject.larry.characters[2].favourtieHobby);

// 4.
    console.log(crazyObject.larry.nicknames[1]);

// 5.
    console.log(crazyObject.larry.characters[1]);









