import * as firebase from 'firebase';
import { fail } from 'assert';

const config = {
    apiKey: "AIzaSyAR-H9RLHNuVbxD5H962L0J3qPqwhO5vVk",
    authDomain: "expensify-16326.firebaseapp.com",
    databaseURL: "https://expensify-16326.firebaseio.com",
    projectId: "expensify-16326",
    storageBucket: "expensify-16326.appspot.com",
    messagingSenderId: "784009318711"
  };

  firebase.initializeApp(config);

 const database = firebase.database();

 database.ref().set({
    name: 'Þórey Guðjónsdóttir',
    age: 25,
    job: {
        title: 'Software Developer',
        company: 'Google' 
    },
    stressLevel: 7,
    location: {
        city: 'Reykjavík',
        country: 'Iceland'
    }
  }).then(() => {
      console.log('Data is saved!');
  }).catch((e) => {
    console.log('This failed.', e);
  });


  /* database.ref().update({
    name: 'Bob',
    age: 34,
    job: 'Software Developer',
    isSingle: null
  }); */

  database.ref().update({
      stressLevel: 9,
      'job/company' : 'Amazon',
      'location/city': 'Seattle'
  });

  /*database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('Remove succeded!');
  }).catch((e) => {
      console.log('Something went wrong in removing.')
  })*/