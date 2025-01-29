var shape = {
  is2D: true,
};

var circle = {
  radius: 3,
};

var rectangle = {
  length: 1,
  breadth: 3,
};

circle.__proto__ = shape; //the properties of the shape is copied to the circles by accessing the proto of the circle

console.log("Is circle a 2D shape :", circle.is2D);
console.log("Radius a circle :", circle.radius);

rectangle.__proto__ = shape;

console.log("Is rectangle a 2D shape :", rectangle.is2D);
console.log("Length of rectangle : ", rectangle.length);
console.log("Breadth of rectangle : ", rectangle.breadth);
