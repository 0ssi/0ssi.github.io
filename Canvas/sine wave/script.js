


const gui = new dat.GUI()
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight


const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.01
}

const wave2 = {
    y2: 200,
    length2: 0.01,
    amplitude2: 100,
    frequency2: 0.01
}


const StrokeColor = {
    h: 200,
    s: 50,
    l: 50
}

const StrokeColor2 = {
    h2: 200,
    s2: 50,
    l2: 50
}

const backgroundColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 0.01

}

const backgroundColor2 = {
    r2: 0,
    g2: 0,
    b2: 0,
    a2: 0.01

}

const waveFolder = gui.addFolder("wave")
waveFolder.add(wave, "y", 0, canvas.height)
waveFolder.add(wave, "length", -0.01, 0.01)
waveFolder.add(wave, "amplitude", -300, 300)
waveFolder.add(wave, "frequency", -0.01, 1)
waveFolder.open()


const strokeFolder = gui.addFolder("stroke")
strokeFolder.open()
strokeFolder.add(StrokeColor, "h", 0, 255)
strokeFolder.add(StrokeColor, "s", 0, 100)
strokeFolder.add(StrokeColor, "l", 0, 100)




const waveFolder2 = gui.addFolder("wave2")
waveFolder2.add(wave2, "y2", 0, canvas.height)
waveFolder2.add(wave2, "length2", -0.01, 0.01)
waveFolder2.add(wave2, "amplitude2", -300, 300)
waveFolder2.add(wave2, "frequency2", -0.01, 1)
waveFolder2.open()


const strokeFolder2 = gui.addFolder("stroke2")
strokeFolder2.open()
strokeFolder2.add(StrokeColor2, "h2", 0, 255)
strokeFolder2.add(StrokeColor2, "s2", 0, 100)
strokeFolder2.add(StrokeColor2, "l2", 0, 100)

const backgroundFolder = gui.addFolder("background")
backgroundFolder.open()
backgroundFolder.add(backgroundColor, "r", 0, 255)
backgroundFolder.add(backgroundColor, "g", 0, 255)
backgroundFolder.add(backgroundColor, "b", 0, 255)
backgroundFolder.add(backgroundColor, "a", 0, 1)



let increment = wave.frequency
let increment2 = wave2.frequency2

function animate() {
    requestAnimationFrame(animate)
    
    c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.g}, ${backgroundColor.a}  )`
    
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.beginPath()

c.moveTo(0, canvas.height / 2)


for (let i = 0; i < canvas.width; i++) {
    c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment))
}

console.log(wave2.y2)

c.strokeStyle = `hsl(${Math.abs(StrokeColor.h * Math.sin(increment))}, ${StrokeColor.s}%, ${StrokeColor.l}%)`

c.stroke()


c.beginPath()

c.moveTo(0, canvas.height / 2)

for (let i = 0; i < canvas.width; i++) {
    c.lineTo(i, wave2.y2 + Math.sin(i * wave2.length2 + increment2) * wave2.amplitude2 * Math.sin(increment2))
}

c.strokeStyle = `hsl(${Math.abs(StrokeColor2.h2 * Math.sin(increment2))}, ${StrokeColor2.s2}%, ${StrokeColor2.l2}%)`

c.lineTo(canvas.width, canvas.height / 2)
c.stroke()

console.log

increment += wave.frequency
increment2 += wave2.frequency2


}
animate()









