let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let window_height = window.innerHeight
let window_width = window.innerWidth

canvas.width = window_width
canvas.height = window_height
canvas.style.background = "#ff9"

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
		ctx.closePath()
	}
}

let all_circles = []

let createCircle = function(circle) {
	circle.draw(ctx)
}

for ( var numbers = 0; numbers < 5; numbers++ ){
	let random_x = Math.random() * window.innerWidth
	let random_y = Math.random() * window.innerHeight

	let my_circle = new Circle(random_x, random_y, 50, "black")
	all_circles.push(my_circle)
	createCircle(all_circles[numbers])
}
let min = 000
let max = 256

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

let rgb = Math.floor(Math.random() * (max - min)) + min

console.log(Math.floor(Math.random() * (max - min)) + min)

// let my_circle = new Circle(100, 100, 50, "black")
// let my_circle2 = new Circle(150, 150, 50, "black")

// my_circle.draw(ctx)
// my_circle2.draw(ctx)