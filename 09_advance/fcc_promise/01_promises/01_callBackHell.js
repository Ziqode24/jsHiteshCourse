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

function task3(callback) {
  setTimeout(() => {
    console.log("Step 3: Pour the boiled water into the cup.");
    callback();
  }, 2000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("Step 4: Let the tea steep for a few minutes.");
    callback();
  }, 2500);
}
function task5(callback) {
  setTimeout(() => {
    console.log("Step 5: Remove the tea bag or strain the tea leaves.");
    callback();
  }, 3000);
}
function task6(callback) {
  setTimeout(() => {
    console.log("Step 6: Add milk, sugar, or honey if desired.");
    callback();
  }, 3500);
}
function task7(callback) {
  setTimeout(() => {
    console.log("Step 7: Stir well and enjoy your tea!");
    callback();
  }, 4000);
}

//this pyramid is called Call back hell 
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