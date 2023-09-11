function test(num) {
  
  const newPromise =  new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof num === 'number') {
        resolve(num *2)
      } else {
        reject('invalid input')
      }
    },1000)
  })

  newPromise.then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  
}

test(10)
test('a123')