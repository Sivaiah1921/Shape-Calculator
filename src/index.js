
let selectedShape;
let areaResult;

const  setRadioValue =()=> {
    let selectedShape = document.getElementsByName('area');
    for (i = 0; i < selectedShape.length; i++) {
        if (selectedShape[i].checked) {
            document.getElementById("step-1").style.display = "none";
            document.getElementById("step-2").style.display = "block";
            document.getElementById(`${selectedShape[i].value}-form`).style.display = "block";
            this.selectedShape = selectedShape[i].value;
        }
    }
}

class Shape {
    constructor() {
    }
    area() {
        return null;
    }
}
//calculate the rectangle
class Rectangle extends Shape {
    constructor(l, w) {
        super();
        this.length = l
        this.width = w
    }
    area() {
        return this.length * this.width;
    }
}
//calculate the circle
class Circle extends Shape {
    constructor(diameter) {
        super();
        this.diameter = diameter
    }
    area() {
        return Math.PI * this.diameter;
    }
}
//calculate the squre
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side
    }
    area() {
        return this.side * this.side;
    }
}
//calculate the elipse
class Ellipse extends Shape {
    constructor(aAxis, bAxis) {
        super();
        this.aAxis = aAxis
        this.bAxis = bAxis
    }
    area() {
        return Math.PI * this.aAxis * this.bAxis;
    }
}

//calculator logics.
function onApplyValue() {
    switch (this.selectedShape) {
        case "rectangle": {
            let height = document.getElementById('rect-value-1').value;
            let width = document.getElementById('rect-value-2').value;
            let Area = new Rectangle(height, width)
            this.areaResult = Area.area();
            const value = Area.area();
            document.getElementById("step-2").style.display = "none";
            document.getElementById("step-3").style.display = "block";
            document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>rectangle</b> with height of ${height} and width of ${width}. Below is your result`;
            document.getElementById("result-heading").innerHTML = `The area is ${value}`;
            break;

        }
        case "circle": {
            let diameter = document.getElementById('circle-value').value;
            let Area = new Circle(diameter)
            this.areaResult = Area.area()
            document.getElementById("step-2").style.display = "none";
            document.getElementById("step-3").style.display = "block";
            document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>circle</b> with diameter of ${diameter}. Below is your result`;
            document.getElementById("result-heading").innerHTML = `The area is ${this.areaResult}`;
            break;
        }
        case "square": {
            let side = document.getElementById('square-value').value;
            let Area = new Square(side)
            this.areaResult = Area.area()
            document.getElementById("step-2").style.display = "none";
            document.getElementById("step-3").style.display = "block";
            document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>square</b> with side of ${side}. Below is your result`;
            document.getElementById("result-heading").innerHTML = `The area is ${this.areaResult}`;
            break;
        }
        case "ellipse": {
            let aAxis = document.getElementById('ellipse-value-1').value;
            let bAxis = document.getElementById('ellipse-value-2').value;
            let Area = new Ellipse(aAxis, bAxis)
            this.areaResult = Area.area()
            document.getElementById("step-2").style.display = "none";
            document.getElementById("step-3").style.display = "block";
            document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>ellipse</b> with A-axis of ${aAxis} and B-axis of ${bAxis}. Below is your result`;
            document.getElementById("result-heading").innerHTML = `The area is ${this.areaResult}`;
            break;
        }
    }
}
// clear function 
function onClear() {
    let selectedShape = document.getElementsByName('area');
    for (let i = 0; i < selectedShape.length; i++) {
        document.getElementById(`${selectedShape[i].value}-form`).style.display = "none";
        selectedShape[i].checked = false;
    }
    document.getElementById("step-1").style.display = "block";
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "none";
}

// console.log("first commit");