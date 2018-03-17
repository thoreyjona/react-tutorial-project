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
    isSingle: false,
    location: {
        city: 'Reykjavík',
        country: 'Iceland'
    }
  });

  // database.ref().set('This is my data');

  database.ref('age').set(26);
  database.ref('location/city').set('Akureyri');
  database.ref('attributes').set({
      height: 161,
      weight: 60
  })