let selectedShape;

const setRadioValue =()=> {
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

//calculate the All areas to this factory Method
const shapeFactory = (...args) => {
        const shape = {}
        shape.length = args[0];
        shape.width = args[1];
        shape.diameter = args[0];
        shape.side = args[0];
        shape.aAxis = args[0];
        shape.bAxis = args[1];

    shape.printRecArea = function(){
        return this.length * this.width;
    }
    shape.printCircleArea = function(){
        return Math.PI * this.diameter;
    }
    shape.printsquareArea = function(){
        return this.side * this.side;
    }
    shape.printEllipseArea = function(){
        return  Math.PI * this.aAxis * this.bAxis;
    }
 return shape
}
// render the Rectangle function
 const renderRec = () => {
    let height = document.getElementById('rect-value-1').value;
    let width = document.getElementById('rect-value-2').value;
    let areaOfRec = shapeFactory(height, width)
    let value = areaOfRec.printRecArea()
    console.log(height,width,value)
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "block";
    document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>rectangle</b> with height of ${height} and width of ${width}. Below is your result`;
    document.getElementById("result-heading").innerHTML = `The area is ${value}`
}
// render the Cilrcle  function
const rederCircle = () => {
    let diameter = document.getElementById('circle-value').value;
    let areaOfCircle = shapeFactory(diameter)
    let areaResult = areaOfCircle.printCircleArea()
    console.log(areaOfCircle.printCircleArea())
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "block";
    document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>circle</b> with diameter of ${diameter}. Below is your result`;
    document.getElementById("result-heading").innerHTML = `The area is ${areaResult}`;
}
// render the Square  function
const renderSquare = () => {
    let side = document.getElementById('square-value').value;
    let areaOfSquare = shapeFactory(side)
    let areaResult = areaOfSquare.printsquareArea()
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "block";
    document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>square</b> with side of ${side}. Below is your result`;
    document.getElementById("result-heading").innerHTML = `The area is ${areaResult}`;
}
// render the Ellipse  function
const renderEllipse = () => {
    let aAxis = document.getElementById('ellipse-value-1').value;
    let bAxis = document.getElementById('ellipse-value-2').value;
    let areaOfEllipse =shapeFactory(aAxis, bAxis)
    let areaResult = areaOfEllipse.printEllipseArea()
    console.log(aAxis,bAxis,areaResult)
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "block";
    document.getElementById("result-para").innerHTML = `You have calculated the area of a <b>ellipse</b> with A-axis of ${aAxis} and B-axis of ${bAxis}. Below is your result`;
    document.getElementById("result-heading").innerHTML = `The area is ${areaResult}`;
}

//calculator logics.
const onApplyValue = () => {
    switch (this.selectedShape) {
        case "rectangle": renderRec()
        break;
        case "circle": rederCircle()
        break;
        case "square": renderSquare()
        break;
        case "ellipse": renderEllipse()
        break;
        default: return null
    }
}
// clear function 
const onClear = () => {
    let selectedShape = document.getElementsByName('area');
    for (let i = 0; i < selectedShape.length; i++) {
        document.getElementById(`${selectedShape[i].value}-form`).style.display = "none";
        selectedShape[i].checked = false;
    }
    document.getElementById("step-1").style.display = "block";
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "none";
}