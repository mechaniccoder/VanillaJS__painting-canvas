# Canvas painting
노마드 코더 아카데미에서 VanillaJS ver.2 클론 수업을 듣고 따라한 프로젝트입니다.

# 프로젝트 목적
캔버스 페인팅 프로젝트를 통한 Vanilla JS에 대한 숙련도를 올리는 것입니다.

# 기능
`그리기`    `색상선택`     `두께조절`

# 기술 스택
`Vanilla Javascript`	`CSS3`	`HTML5`


# 코드 리뷰
### 예외처리 
  
`app.js`
```js
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
```
이런식으로 canvas에 이벤트를 달기 전에 먼저 존재 유무를 파악함으로써 생기는 오류에 대해 예외처리를 할 수 있다. 이런 코드를 보기전까지 내가 정의한 변수를 별 생각없이 썼지만 앞으로는 이런 식의 코드를 연습할 생각이다.




