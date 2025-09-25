
// /// how asynchronous data works
 

// // console.log(1);
// // console.log(2);

// // setTimeout(() => {
// //     console.log('callback function fired');
// // }, 2000); 

// // console.log(3);
// // console.log(4);

// const getTodos = (resource, ) => {
//     return new Promise((resolve, reject) => {

// const request = new XMLHttpRequest();


// request.addEventListener('readystatechange', () => {
//    // console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200){
//         //console.log(request, request.responseText);   
//         const data = JSON.parse(request.responseText);
        
//         //callback(undefined, data); 
//         resolve(data);}
//     else if(request.readyState === 4){
//         //console.log('could not fetch the data');
//     //callback('could not fetch data', undefined);
//     reject('could not fetch data');
//     }

// });
    


//request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');


// request.open('GET', resource);
// request.send();
//     } );

// };

// getTodos('todos.json').then(data => {
//     console.log('promise resolved:', data);
//     return getTodos('buali.json');
// }).then(data => {
//     console.log('promise 2 resolved:', data);
//     return getTodos('shaun.json');
// }).then(data => {
//     console.log('promise 3 resolved:', data);
// }).catch(err => {
//     console.log('promise rejected:', err);
// });



//console.log(1);
//console.log(2);



// getTodos((err, data) => {
//     console.log('callback fired');
    //console.log(err, data);

    // if(err){
    //     console.log(err);
    // }else{
    //     console.log(data);
    // }
// });

// getTodos('buali.json' , (err, data) => {
//     console.log(data);
//     getTodos('shaun.json', (err, data) => { 
//         console.log(data);
//         getTodos('todos.json', (err, data) => {
//             console.log(data);
//         });
//     });
// }
// );


// Promise Example

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something      
//         //resolve('some data');
//         reject('some error');
//     });
// };

// // //getSomething().then((data) => {
// //     console.log(data);
// // }, (err) => {
// //     console.log(err);
// // })

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// fetch api

// fetch('todos.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });

const getTodos = async () => {  
    const response = await fetch('todos.json');
    if (response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
};

getTodos()
.then(data =>
    console.log('resolved',data))
    .catch(err =>
        console.log('rejected', err.message));




 
