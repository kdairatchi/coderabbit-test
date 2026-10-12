function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}

function farewell(name) {
  var msg = "Goodbye, " + name;
  console.log(msg);
}

greet("world");
farewell("world");
