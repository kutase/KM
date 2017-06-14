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

function drawLine (x1, y1, x2, y2, strokeStyle="black", lineWidth=2) {
    ctx.strokeStyle = strokeStyle
    ctx.lineWidth = lineWidth
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function setScale (scale, val) {
	return val * scale + canvas.width / 2
}

let scale = 50
function drawGraph () {
	let x1 = 0, y1 = 0, x2 = 0, y2 = 0

	for (let i = 0; i < 10000; i++) {
		x2 = x1 + h*graphFuncF(x1, y1)
		y2 = y1 + h*graphFuncG(x1, y1)

		drawLine(setScale(scale, x1), setScale(scale, y1), setScale(scale, x2), setScale(scale, y2))

		x1 = x2
		y1 = y2
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
