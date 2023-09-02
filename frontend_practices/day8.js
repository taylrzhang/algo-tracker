// Flatten array which means converting a multidimensional array to a one-dimensional array.(can not use any built-in function)
// input:[ 1, 2, [3, 4], "hello", [[5,6],7, {name:'bob'},[8], 9],[10, 11, [12, 13, [14, 15], 16]]];
// output: [1,2,3,4,"hello",5,6,7,{name:"bob"},8,9,10,11,12,13,14,15,16]

const flattenArray = (array) => {
  let result = [];

  function helper(el) {
    for (let i = 0; i < el.length; i++) {
      if (Array.isArray(el[i])) {
        helper(el[i]);
      } else result.push(el[i]);
    }
  }

  helper(array);
  return result;
};

// console.log(
//   flattenArray([
//     1,
//     2,
//     [3, 4],
//     "hello",
//     [[5, 6], 7, { name: "bob" }, [8], 9],
//     [10, 11, [12, 13, [14, 15], 16]],
//   ])
// );

// Find the country with the highest population, programmatically, using the data below,
// and log the country name with the highest population

const countries = [
  { id: 1, name: "USA" },
  { id: 2, name: "England" },
  { id: 3, name: "Russia" },
  { id: 4, name: "New Zealand" },
];

const cities = [
  { id: 1, country_id: 1, name: "New York" },
  { id: 2, country_id: 1, name: "Seattle" },
  { id: 3, country_id: 1, name: "Los Angeles" },
  { id: 4, country_id: 1, name: "Houston" },
  { id: 5, country_id: 1, name: "San Diego" },
  { id: 6, country_id: 2, name: "London" },
  { id: 7, country_id: 2, name: "Manchester" },
  { id: 8, country_id: 3, name: "Moscow" },
  { id: 9, country_id: 3, name: "Novosibirsk" },
  { id: 10, country_id: 4, name: "Auckland" },
  { id: 11, country_id: 4, name: "Wellington" },
];

const populations = [
  { id: 1, city_id: 1, amount: 8419000000 },
  { id: 2, city_id: 2, amount: 724305 },
  { id: 3, city_id: 3, amount: 3967000 },
  { id: 4, city_id: 4, amount: 2310000 },
  { id: 5, city_id: 5, amount: 1410000 },
  { id: 6, city_id: 6, amount: 8982000 },
  { id: 7, city_id: 7, amount: 553230 },
  { id: 8, city_id: 8, amount: 11920000 },
  { id: 9, city_id: 9, amount: 1511000 },
  { id: 10, city_id: 10, amount: 1657000 },
  { id: 11, city_id: 11, amount: 212700 },
  { id: 12, city_id: 1, amount: 898900 },
];

// function find(countries, cities, populations) {
//   const result = {};

//   populations.forEach((p) => {
//     const cityId = p.city_id;
//     const city = cities.find((city) => city.id === cityId);
//     const countryId = city.country_id;
//     const country = countries.find((country) => country.id === countryId);
//     console.log(country.name);
//     if (!result[country.name] || p.amount > result[country.name]) {
//       // console.log(result);
//       result[country.name] = p.amount;
//     }
//   });

//   return result;
// }

// console.log(find(countries, cities, populations));

function find(countries, cities, populations) {
  let maxCountry = "";
  let maxP = 0;
  countries.forEach((country) => {
    cities
      .filter((city) => {
        return city.country_id === country.id;
      })
      .reduce((acc, city) => {
        const totalPop = (acc += populations.find(
          (p) => p.city_id === city.id
        ).amount);

        if (totalPop > maxP) {
          maxP = totalPop;
          maxCountry = country.name;
        }
        return totalPop;
      }, 0);
  });
  return [maxCountry, maxP];
}

/*
loop through contries
loop through cities, find all cities in the same country
loop through populations, calc the curr country total population
find the maxNum and country name
*/

console.log(find(countries, cities, populations)); // -> [ 'USA', 8427411305 ]
