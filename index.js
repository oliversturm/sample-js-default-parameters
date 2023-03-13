// Accept a default value for a parameter
function takeDefault(x = 42) {
  console.log(`Got x=${x}`);
}

// This gives us x = 42
takeDefault();

// Object parameters can have defaults for individual values
function takeObject({ x = 42, y }) {
  console.log(`Got x=${x} and y=${y}`);
}

// x = 42 in this case, y of course = 17
takeObject({ y: 17 });

// x = 101 now, y still 17
takeObject({ x: 101, y: 17 });

// No value given, x=42 and y=undefined
takeObject({});

// However -- must have a parameter, otherwise there's trouble!
//takeObject();

// So here we have a default for the object itself
function takeObjectWithDefault({ x = 42, y } = {}) {
  console.log(`Got x=${x} and y=${y}`);
}

// Now we don't have to pass an object if we don't want to
takeObjectWithDefault();

// Note that theoretically the default object could override
// the default value on the object level -- probably not a good
// idea unless you have a very specific reason why this would
// be expected by the caller.
function takeObjectWithWeirdDefault({ x = 42, y } = { x: 101 }) {
  console.log(`Got x=${x} and y=${y}`);
}

takeObjectWithWeirdDefault();
