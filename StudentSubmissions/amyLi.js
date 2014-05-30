/* DAY 2 Part 1 */

// 1a
var animal = {};
animal.species =  'canine';
console.log(animal.species);
animal['tagline'] = 'Loves sunsets on the beach';
console.log(animal['tagline']);
animal.noises = null;
console.log(animal);

// 1b
var noiseArray = [];
noiseArray[0] = 'woof';
noiseArray.push('grr');
noiseArray.unshift('whine');
noiseArray[noiseArray.length] = 'growl';
console.log(noiseArray.length); //length is 4
console.log(noiseArray.length-1); //last index is 3
console.log(noiseArray);

// 1C
var noizes = 'noises';
console.log(animal[noizes]);
animal[noizes] = noiseArray;
animal['%^&'] = true;
var someVar = 'fur';
animal[someVar] = true;

// 2
var animals = [];
animals.push(animal);
console.log(animals);

var quackers = { species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals.unshift(quackers);
console.log(animals);

var fluffy = {
  species: 'cat',
  tagline: 'purr',
  noises: [
    'meow',
    'snort',
    'sneeze',
    'mew'
  ]
};
var elizabeth = {
  species: 'turtle',
  tagline: 'splash',
  noises: [
    'snap',
    'splash',
    'whatever',
    'mew'
  ]
};
animals.push(fluffy,elizabeth);

// Step 3
var friends = [];
friends.push(fluffy.species, quackers.species);
console.log(friends);

var relationships = {};
relationships.friends = friends;
console.log(relationships);
relationships.matches = [];
relationships.matches.push(elizabeth.species, animal.species);
console.log(relationships);

for (var i=0; i<animals.length; i++) {
  animals[i].relationships = relationships;
}

console.log(animals);








