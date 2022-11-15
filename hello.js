const oneLinerJoke = require("one-liner-joke");
const cowsay = require("cowsay");

var getRandomJoke = oneLinerJoke.getRandomJoke();

console.log(
  cowsay.say({
    text: getRandomJoke.body,
    e: "🙂🙂",
    T: "b",
  })
);