console.log('this is separate js file');

function makeRed() {
    document.body.style.backgroundColor = 'red'
}

const makeBlueBg = document.getElementById('make-blue');
makeBlueBg.onclick = blueColor;

function blueColor() {
    document.body.style.backgroundColor = 'blue';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink'
}

document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})