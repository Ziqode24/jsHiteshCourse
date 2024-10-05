syncronise programing
...

asyncronise programming 
-   defination: async pro.. is a proseess that allows an aplication to run a second set of instruction while focussing on its primary or basic proceess
-   benifits: improved aplication performance , wide application to diff coding language and better user expriences 
-   use cases: reduce inefficience from an application , efficient data collection

//calback
explain this code:[thr we give callback as argument]
```javascript
function task1(callback) {
  setTimeout(() => {
    console.log("Step 1: Boil some water.");
    callback();
  }, 1000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Step 2: Add tea leaves or a tea bag to your cup.");
    callback();
  }, 1500);
}
....

```

callback hell
```javascript
task1(() =>[
  task2(() =>{
    task3(() => {
      task4(() => {
        task5(() => {
          task6(() => {
            task7(() => {});
          });
        });
      });
    });
  })
])

//from 01.js
```

promises
definationa promises is an assurance / gurantee that nsomethig will  happen in future. A person can promise another person a specific outcome/result. A promise is an object that holds the future valuse of an async operation

example : requisting some data from a server, the promise , promise us to get the data which we can use in future

three states of: pending(1), fulfiled(2), rejected(3) 

promise syntax 
```javascript
const promise = new Promise((resolve, reject) =>{
   //explain what new , Promise word do (overall breakdown the syntax) 
})

//=====================================================

const promise = new Promise((resolve, reject) =>{

  const allWhite = false;
  //explain the resolve and reject param with the below code breakdown
  if(!allWhite){
    resolve("all things are white")
}else{
    reject("not all things are white")
  }
})

console.log(promise)
```

