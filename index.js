var rectangle = {
width: 300,
height:500
};
function calcArea(){
  var width=rectangle.width
  var height=rectangle.height
  var result = width * height; 
  return result;
}
var theArea=calcArea()
console.log ("The area of the rectangle is"+ calcArea)
