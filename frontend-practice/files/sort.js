/**
    output={  
    '7:00': 'Advil',  
    '8:00' : 'Aspirin',  
    '12:30' : 'Aspirin',  
    '15:30' : 'Aspirin',  
    '19:30' : 'Advil', }
 */

let input = [
  {
    name: "Aspirin",
    startedOn: "10-2-2021",
    endedOn: "08-2-2022",
    times: ["8:00", "12:30", "15:30"],
  },
  {
    name: "Advil",
    startedOn: "12-2-2021",
    endedOn: "05-2-2022",
    times: ["7:00", "19:30"],
  },
];

function convertTimeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

let reorder = function (arr) {
  let result = arr.reduce((acc, obj) => {
    obj.times.forEach((time) => {
      acc[time] = obj.name;
    });
    return acc;
  }, {});

  let sorted = Object.entries(result).sort((a, b) => {
    return convertTimeToMinutes(a[0]) - convertTimeToMinutes(b[0]);
  });

  return Object.fromEntries(sorted);
};

console.log(reorder(input));
