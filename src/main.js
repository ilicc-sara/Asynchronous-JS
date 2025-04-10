"use strict";
import "./style.css";
("use strict");

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// function renderError(message) {
//   countriesContainer.insertAdjacentText("beforeend", message);
//   // countriesContainer.style.opacity = 1;
// }

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );

//   request.send();
//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//       </article>
//       `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);

//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');

/********************************************************************************** */
// function renderCountry(data, className = "") {
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//   <h3 class="country__name">${data.name}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )}</p>
//   <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>
//     `;

//   countriesContainer.insertAdjacentHTML("beforeend", html);

//   // countriesContainer.style.opacity = 1;
// }
/****************************************************************************************** */

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );

//   request.send();
//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Renger country
//     renderCountry(data);

//     // Get neighbour country
//     const neighbour = data.borders?.[4];

//     if (!neighbour) return;

//     // AJAX call country 1
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//     );

//     request2.send();

//     request2.addEventListener('load', function () {
//       // console.log(this.responseText);
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('serbia');

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send;
// };

// const request = fetch(
//   `https://countries-api-836d.onrender.com/countries/name/portugal`
// );
// console.log(request);

// const getCountryData = function (country) {
//   // Country 1
//   fetch(
//     // `https://countries-api-836d.onrender.com/countries/name/${country}`
//     `https://restcountries.com/v2/name/${country}`
//   )
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[5];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       )
//         .then((response) => response.json())
//         .then((data) => renderCountry(data, "neighbour"))
//         .catch((err) =>
//           // (err) => alert(err)
//           {
//             console.error(`${err} 💥💥💥`);
//             renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//           }
//         )
//         .finally(() => {
//           countriesContainer.style.opacity = 1;
//         });
//     });
// };
// // renderError(`Something went wrong 💥💥. Try again!`);
// btn.addEventListener("click", function (e) {
//   getCountryData("serbia");
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const lottertPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery draw is happening 🔮");

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 2000);
// });

// lottertPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("I waited for 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("I waited for 1 second"));

// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject(new Error("Problem!")).catch((x) => console.error(x));

// wait(1)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 seconds passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 seconds passed");
//     return wait(1);
//   })
//   .then(() => console.log("4 seconds passed"));

navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.err(err)
);
console.log("Getting position");
