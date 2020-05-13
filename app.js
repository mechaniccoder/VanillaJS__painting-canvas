const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

canvas.width = 700;
canvas.height = 700;

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

/*
 mousemove 이벤트가 발생할 때 경로를 초기화하며 
 mousedown 이벤트가 발생했을 때 경로를 그리는 하는 함수
*/
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// 이벤트 타겟 클릭 시 strokeStyle을 변경시켜 원하는 색상으로 그리게 하는 함수이다.
function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

// Array.from이라고 하는 것은 object를 array로 만드는 역할을 한다.
Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
);


function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(event) {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint"
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

/*
 range가 있는지 없는지 먼저 확인을 하고 코드를 짜면 예외처리도 가능!!
 익숙해지면 좋은 습관일 것 같다.
 */
if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

