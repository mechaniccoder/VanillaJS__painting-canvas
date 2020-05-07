const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

canvas.width = 700;
canvas.height = 700;

let painting = false;

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

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
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

