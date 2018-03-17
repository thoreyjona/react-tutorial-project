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

 const onValueChange = database.ref()
  .on('value', (snapshot) => {
      const val = snapshot.val();
      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
  });

  setTimeout(() => {
    database.ref('name').set('Þórey Guðjónsdóttir');
  }, 3500);



 /*const onValueChange = database.ref()
  .on('value', (snapshot) => {
    console.log(snapshot.val());
  }, (e) => {
    console.log('Error with data fetching', e); 
  });

  setTimeout(() => {
    database.ref('age').set(32);
  }, 3500);

  setTimeout(() => {
    database.ref().off(onValueChange);
  }, 7000);

  setTimeout(() => {
    database.ref('age').set(35);
  }, 10500);*/

 // Get the data once, functions run once
 /*database.ref('location/city')
    .once('value')
    .then((snapshot)=> {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data', e);
    });*/

 /*database.ref().set({
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
  });*/


  /* database.ref().update({
    name: 'Bob',
    age: 34,
    job: 'Software Developer',
    isSingle: null
  }); */

  /*database.ref().update({
      stressLevel: 9,
      'job/company' : 'Amazon',
      'location/city': 'Seattle'
  });*/

  /*database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('Remove succeded!');
  }).catch((e) => {
      console.log('Something went wrong in removing.')
  })*/