// Write a program that can describe either a circle or a rectangle using a special type alias, including properties
// unique to each shape.
type Shape = {
  shapeKind: "rectangle" | "circle";
  width?: number;
  height?: number;
  borderColor: string;
  shapeFill: string;
  radius?: number;
  diameter?: number;
  area?: number;
};
const rectangle: Shape = {
  shapeKind: "rectangle",
  width: 30,
  height: 15,
  borderColor: "Black",
  shapeFill: "Pink",
};
console.log(rectangle);
const circle: Shape = {
  shapeKind: "circle",
  radius: 2,
  diameter: 4.5,
  area: 3.7,
  borderColor: "Black",
  shapeFill: "Green",
};
console.log(circle);
