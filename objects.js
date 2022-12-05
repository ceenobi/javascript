//objects are a type of variable, similar to arrays but the come with key- value pairs
//objects are created using the curly brackets
const person = {
  name: 'Clark Kent',
  job: 'Superman',
  place: 'Metropolis',
}
//to access the properties of the person object, we have the dot notation and the bracket notation
console.log(person.name)
console.log(person.job)
console.log(person['place']) //-bracket notation

//assign property to person object
person.ability = 'fly'
console.log(person)

//creating a function with an object using es6 javascript arrow functions and template literals
const introducer = (name, job, place) => {
  const whoAmI = {
    name: name,
    job: job,
    place: place,
    assets: 100000,
    liability: 40000,
  }
  const intro = `Hi, I'm ${whoAmI.name} and my occupation is ${
    whoAmI.job
  }. I live in ${whoAmI.place} and my networth is #${
    whoAmI.assets - whoAmI.liability
  } `
  return intro
}
console.log(introducer('Diana', 'Wonder Woman', 'Theymisciara'))

//creating methods - a method is a property containing a function definition
const myClub = (club, ucl) => {
  const myTeam = {
    club: club,
    ucl: ucl,
    registeredFans: 300000000,
    unregisteredFans: 1000000,
    fanbase: function () {
      return this.registeredFans - this.unregisteredFans
    },
  }
  const myClubInfo = `My favorite football club is ${
    myTeam.club
  } and we have won the ucl title ${
    myTeam.ucl
  } times and our fanbase is ${myTeam.fanbase()}`
  return myClubInfo
}
console.log(myClub('Real Madrid', 14))
