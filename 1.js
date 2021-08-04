let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let window_height = window.innerHeight
let window_width = window.innerWidth

canvas.width = window_width
canvas.height = window_height
canvas.style.background = "white"

class Circle {
	constructor(xpos, ypos, radius, color) {
		this.xpos = xpos
		this.ypos = ypos
		this.radius = radius
		this.color = color
	}

	draw(ctx){
		ctx.beginPath()
		ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false)
		ctx.stroke()
		ctx.fillStyle = this.color
		ctx.fill()
		ctx.closePath()

	}
}

let numofcircles = prompt('Сколько кругов?', ' ');

let all_circles = []

let createCircle = function(circle) {
	circle.draw(ctx)
}



function getRandomRgb() {
	var num = Math.round(0x00ffffff * Math.random());
	console.log(num);
	var r = num >> 16;
	console.log(r);
	var g = num >> 8 & 255;
	console.log(g);
	var b = num & 255;
	console.log(b);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	
  }
  

for ( var numbers = 0; numbers < numofcircles; numbers++ ){
	let random_x = Math.random() * 1000
	let random_y = Math.random() * 1000

	let my_circle = new Circle(random_x, random_y, 50, getRandomRgb())
	all_circles.push(my_circle)
	createCircle(all_circles[numbers])
}
