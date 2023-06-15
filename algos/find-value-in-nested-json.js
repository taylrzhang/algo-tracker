const get_obj_from_path = (obj, str) => {
  const levels = str.split("->");
  let curr = obj;
  for (let i = levels.length - 1; i >= 0; i--) {
    for (let key in curr) {
      curr = curr[key];
      if (i === 0) {
        return curr;
      }
    }
  }
};

const json_obj = {
  a: {
    b: {
      c: [1, 2, 3],
      d: ["hello"],
    },
  },
};

console.log(get_obj_from_path(json_obj, "a->b->c"));
