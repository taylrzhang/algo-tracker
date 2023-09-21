 const data = [
  {
    name: "animal",
    link: "animal",
    type: [
      {
        name: "dog",
        link: "animal/dog"
      },
      {
        name: "cat",
        link: "animal/cat",
        type: [
          {
            name: "Savannah Cat",
            link: "animal/cat/savannah"
          },
          {
            name: "Bombay Cat",
            link: "animal/cat/bombay"
          }
        ]
      }
    ]
  },
  {
    name: "car",
    link: "car",
    type: [
      {
        name: "dodge",
        link: "car/dodge"
      },
      {
        name: "mazda",
        link: "car/mazda",
        type: [
          {
            name: "MX5",
            link: "car/mazda/mx5"
          }
        ]
      }
    ]
  }
];

//output
/*
(9) ["animal", "animal/dog", "animal/cat", "animal/cat/savannah", "animal/cat/bombay", "car", "car/dodge", "car/mazda", "car/mazda/mx5"]
0: "animal"
1: "animal/dog"
2: "animal/cat"
3: "animal/cat/savannah"
4: "animal/cat/bombay"
5: "car"
6: "car/dodge"
7: "car/mazda"
8: "car/mazda/mx5"

*/

const findLinks = (arr, result = []) => {
    arr.forEach((el) => {
      if(el.link) result.push(el.link);
      if(el.type) findLinks(el.type, result);
    })
  return result
}

console.log(findLinks(data))