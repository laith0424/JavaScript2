'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here
const PER_HOUR_RATE = 35 ;   // 35 Euro

let durationsInHoursOfMonday  = monday.map( function ( obj ) { return obj.duration / 60 })

durationsInHoursOfMonday  = durationsInHoursOfMonday.filter( num => { return num >= 1 })

let pricesdurationsOfMonday = durationsInHoursOfMonday.map( function ( num ) { return num * PER_HOUR_RATE })

var totalSumInMonday = pricesdurationsOfMonday.reduce((a, b) => a + b, 0);



let durationsInHoursOfTuesday = tuesday.map( function ( obj ) { return obj.duration / 60 })

durationsInHoursOfTuesday = durationsInHoursOfTuesday.filter( num => { return num >= 1 })

let pricesdurationsOfTuesday = durationsInHoursOfTuesday.map( function ( num ) { return num * PER_HOUR_RATE })

var totalSumInTuesday = pricesdurationsOfTuesday.reduce((a, b) => a + b, 0);



var totalSum = Math.floor( ( totalSumInTuesday + totalSumInMonday) * 100) / 100;
console.log('Total Price : ' + totalSum + ' €');
