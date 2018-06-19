console.log("JS Running!")

    //  //  Answer the Following
// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

// A light switch that can be either on or off.
  //Boolean (true/false)

// A user's email address.
  //string
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
  //object
// A list of student names from our class.
  //Array
// A list of student names from our class, each with a location.
  //Object Array
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
  // Object Array

  const crazyObject = {
  taco: [
    {meat: 'steak',
    cheese: ['panela', 'queso', 'chihuahua']
    },
    {
    meat: 'chicken',
    salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],

  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
  characters: [
    {
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


//Use crazy Object to log the following.

//"omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

//"Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

//"Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby)

//"Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1])

//The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1].name)














