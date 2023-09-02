function Promise(executor) {
  //set the state as pending and value to null when init
  this.promiseState = "Pending";
  this.promiseResult = null;
  //bind this when call resolve and reject in executor
  const self = this;
  //set a callback queue for async callbacks, then() runs before async function, so add the then() callbacks into the queue and run it again with values
  this.callbacks = [];

  function resolve(data) {
    //cannot change the status of a promise twice in the executor
    if (self.promiseState !== "Pending") return;
    //change the state and value
    self.promiseState = "fullfilled";
    self.promiseResult = data;
    self.callbacks.forEach((item) => {
      item.onResolved(data);
    });
  }

  function reject(data) {
    if (self.promiseState !== "Pending") return;
    self.promiseState = "rejected";
    self.promiseResult = data;
    self.callbacks.forEach((item) => {
      item.onRejected(data);
    });
  }

  //use try...catch to catch 'throw' error
  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

//The then() method returns a new Promise, which allows for chaining multiple asynchronous operations together
Promise.prototype.then = function (onResolved, onRejected) {
  //bind this for the returned new promise
  const self = this;
  //use 'throw' to slove catch error in promise chain
  if (!(onRejected instanceof Function)) {
    onRejected = (reason) => {
      throw reason;
    };
  }
  return new Promise((resolve, reject) => {
    //this function is to return the currect type of value in new promise
    function callback(way) {
      try {
        //get the return value of the onResolved/onRejected function -- passin as a callback function->way
        let result = way(self.promiseResult);
        //return value -> promise
        if (result instanceof Promise) {
          result.then(
            (value) => {
              resolve(value);
            },
            (reason) => {
              reject(reason);
            }
          );
          //otherwise return the resolved value
        } else {
          resolve(result);
        }
        //throw err
      } catch (err) {
        reject(err);
      }
    }
    if (this.promiseState === "fullfilled") {
      callback(onResolved);
    }

    if (this.promiseState === "rejected") {
      callback(onRejected);
    }

    if (this.promiseState === "Pending") {
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved);
        },
        onRejected: function () {
          callback(onRejected);
        },
      });
    }
  });
};

Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    } else {
      resolve(value);
    }
  });
};

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    if (reason instanceof Promise) {
      reason.then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    } else {
      reject(reason);
    }
  });
};

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let res = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (value) => {
          count += 1;
          res[i] = value;
          if (count === promises.length) {
            resolve(res);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    }
  });
};

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    }
  });
};
