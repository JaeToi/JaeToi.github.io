let index = 1;
//nth-child에서는 1이 첫번째 ※배열에서는 0이 첫번째

$(".btn-next").click(() => {
  const itemLength = $(".carousel-list").children().length;
  // 다음버튼을 누를때
  // 1) index가 item갯수랑 같으면 index를 1로
  // 2) 그렇지 않으면 index 1증가

  // 값을 할당할때 사망연산자 사용
  index = index === itemLength - 1 ? 0 : index + 1;
  $(".carousel-list").css("transform", `translateX(-${index * 800}px)`);
});

$(".btn-prev").click(() => {
  const itemLength1 = $(".carousel-list").children().length;
  // 이전버튼을 누를때
  // 1) index가 1이면 index를 item갯수로
  // 2) 그렇지 않으면 index 1감소
  index = index === 0 ? itemLength1 - 1 : index - 1;
  $(".carousel-list").css("transform", `translateX(-${index * 800}px)`);
  // index값은 index값이 1이면 index값은 itemlength임
  // 만약 아니면 index
});

$(".button-list button").click(function () {
  index = this.innerText - 1;
  $(".carousel-list").css("transform", `translateX(-${index * 800}px)`);
});
