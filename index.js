let canvas = document.getElementById("graph")
let ctx = canvas.getContext("2d")

const h = 0.01
const a = 2
const b = 2

function drawPixel (x, y) {
	ctx.fillRect(x, y, 1, 1)
}

function graphFuncF (x, y) {
	return a - (b + 1)*x + Math.pow(x, 2)*y
}

function graphFuncG (x, y) {
	return b*x - Math.pow(x, 2)*y
}

function drawLine (x1, y1, x2, y2, strokeStyle="grey", lineWidth=4) {
    ctx.strokeStyle = strokeStyle
    ctx.lineWidth = lineWidth
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

let scale = 200
function drawGraph () {
	let x = 1, y = 1, xNew, yNew

	for (let i = 0; i < 1000; i++) {
		x += h*graphFuncF(x, y)
		y += h*graphFuncG(x, y)

		drawPixel(x*scale + canvas.width / 2 - scale, y*scale + canvas.width / 2 - scale)
		// drawLine(x*scale + canvas.width / 2 - scale, y*scale + canvas.width / 2 - scale, xNew*scale + canvas.width / 2 - scale, yNew*scale + canvas.width / 2 - scale)

		// x = xNew
		// y = yNew
	}
}

function drawAxis() {
    ctx.beginPath()
    ctx.moveTo(0, canvas.width / 2)
    ctx.lineTo(canvas.height, canvas.width / 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(canvas.height / 2, 0)
    ctx.lineTo(canvas.height / 2, canvas.width)
    ctx.stroke()
}

function draw () {
	drawAxis()
	drawGraph()
}

draw()
