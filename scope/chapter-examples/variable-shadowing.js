function hello(name) {
  console.log("Hello,", name);
  name = "Ruth";
  return doubleName(name);
}

function doubleName(name) {
  console.log(name + name);
  return name + name;
}

let name = "mary";

hello(name);
doubleName(name);
console.log(name);
