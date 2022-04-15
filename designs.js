function makeGrid(event) {
    event.preventDefault();
    table.innerHTML = '';
    pic.innerHTML = '';
    let tr = document.getElementById('inputHeight').valueAsNumber;
    let td = document.getElementById('inputWidth').valueAsNumber;
    for (i = 1; i <= tr; i++) {
        let row = document.createElement('tr');
        for (j = 1; j <= td; j++) {
            let col = document.createElement('td');
            row.appendChild(col);
        }
        table.appendChild(row);
    }
}

function chooseColor() {
    colorCode = color.value;
}

function changeBackground(event) {
    let cell = event.target;
    if (event.target.nodeName === 'TD') {
        cell.style.backgroundColor = colorCode;
    }
}

function takeShot() { //This function takes screenshot of canvas. Then you can save the picture using right button of mouse. 
    html2canvas(div).then(
        function (canvas) {

            //let pic = canvas.toDataURL("image/png");
            //console.log(canvas);
            document.getElementById('pic').appendChild(canvas);
            //let win = window.open();
            //win.addEventListener('onload', function () {
            //  win.oncontextmenu.body.ineerHTML = canvas;
            //}, true);
            // window.open(pic, "_blank");
        })

}

/*html2canvas(document.body).then(function(canvas) {
    // Export the canvas to its data URI representation
    var base64image = canvas.toDataURL("image/png");

    // Open the image in a new window
    window.open(base64image , "_blank");
});*/


let submit = document.querySelector('input[type=submit]');
let table = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');
let div = document.getElementById('screenshotArea');
let button = document.getElementById('button');
let pic = document.getElementById('pic');
let colorCode = '';
submit.addEventListener('click', makeGrid);
color.addEventListener('input', chooseColor);
table.addEventListener('click', changeBackground);
button.addEventListener('click', takeShot);
