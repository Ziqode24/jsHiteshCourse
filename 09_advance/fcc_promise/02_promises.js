const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = true;

      if (preHeatOven) {
        resolve('Preheat the oven to 180°C');
      } else {
        reject('Failed to preheat the oven');
      }
    }, 1000);
  });
};

const addSugarAndChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addChoco = false;

      if (addChoco) {
        resolve('Place sugar and choco chips, stir until melted and smooth');
      } else {
        reject('Failed to add sugar and chocolate chips');
      }
    }, 1500);
  });
};

const mixFlour = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mix = true;

      if (mix) {
        resolve('Add flour and mix until fully combined');
      } else {
        reject('Failed to mix flour');
      }
    }, 2000);
  });
};

const addEggs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const eggsAdded = true;

      if (eggsAdded) {
        resolve('Crack in the eggs and mix well');
      } else {
        reject('Failed to add eggs');
      }
    }, 2500);
  });
};

const bakeCookies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bake = true;

      if (bake) {
        resolve('Place in the oven and bake for 15 minutes');
      } else {
        reject('Failed to bake cookies');
      }
    }, 3000);
  });
};

//async function || explain how that async - await works(steps) with the taskone
const makeCookies = async () =>
{  //keep in mind await is only valid in async function
  try {const taskOne = await preHeatOven();
  console.log(taskOne)
  const taskTwo = await addSugarAndChocoChips();
  console.log(taskTwo)
  const taskThree = await mixFlour();
  console.log(taskThree)
  const taskFour = await addEggs();
  console.log(taskFour)
  const taskFive = await bakeCookies();
  console.log(taskFive);

  console.log('Enjoy your Cookies :p')}
catch(error){
  console.log(error); //if it cathechech a error all the next promises will not be executed
}
}

makeCookies()