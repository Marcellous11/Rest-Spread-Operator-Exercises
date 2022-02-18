function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

/* Write an ES2015 Version */

const filterOutOdds2 = (...nums) => nums.filter((num) => num % 2 === 0);

// ------------------------------------------------------------------------------------

const min = (...nums) =>
  nums.reduce((min, nextNum) => (min < nextNum ? min : nextNum));

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...nums) => {
  let otherNum = nums.map((n) => n * 2);
  return [...arr, ...otherNum];
};

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  let randomNum = Math.floor(Math.random() * items.length);
  items.splice(randomNum, 1);
  return items;
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */
// {name: 'jake', key: 'will'}

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
