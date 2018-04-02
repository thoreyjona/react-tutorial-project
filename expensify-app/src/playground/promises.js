const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
         /* resolve({
            name: 'Þórey',
            age: 25
        });*/ 
        reject('Something went wrong');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promies');
        }, 1500);
    });
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');