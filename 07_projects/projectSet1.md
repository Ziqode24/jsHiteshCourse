# Project related to DOM

[Click for Template](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

##project2 [ *BMI_Calculator* ]:

```
const form = document.querySelector('form');

//this will give enpty | it gets value after pageload
// const weight = parseInt(document.querySelector("#weight").value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = ' please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = ' please give a valid weight';
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    //to show the reult
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
