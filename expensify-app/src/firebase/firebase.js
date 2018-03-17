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

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 123,
    createdAt: 1000
});

database.ref('expenses').push({
    description: 'Make up',
    note: '',
    amount: 14555,
    createdAt: 12312312312
});

database.ref('expenses').push({
    description: 'School stuff',
    note: '',
    amount: 14500,
    createdAt: 94565463
});

// database.ref('notes/-L7nqjyHDHacYyqtqnjK').remove();

/* database.ref('notes').push({
    title: 'Course Topics',
    body: 'React Native, Angular, Python'
});*/ 


/* const firebaseNotes = {
    notes: {
        asdasda: {
            title: 'First Note',
            body: 'This is my note'
        },
        xxx: {
            title: 'Second Note',
            body: 'This is my note'
        }
    }
}

const notes = [{
     id: '12',
     title: 'First Note',
     body: 'This is my note'
}, {
    id: '77',
    title: 'Second Note',
    body: 'This is my note' 
}];

database.ref('notes').set(notes); */