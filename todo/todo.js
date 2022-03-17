$("#form").on("submit", (e) => {
  e.preventDefault();

  // const jsValue = document.getElementById("input-text").value;
  // document.getElementById("input-text".value = "대입했다.";
  // $("#input-text").val("대입했다.");

  const value = $("#input-text").val();

  if (value === "") reutrn;
  $(".todo-list").append(
    `<li class="list"><label><input type="checkbox">${value}<span
    class="todo-text"
    ></span
  ></label><button class="btn-delete">Delete</button><button class="btn-edit">수정하기</button>`
  );

  $("#input-text").val("");
  $("#input-text").focus();
});

// 전체삭제
$("#btn-delete-all").click(() => {
  $(".todo-list").html("");
});
// 삭제
$(document).on("click", ".btn-delete", (e) => {
  $(e.currentTarget).parent().remove();
});

// 할일체크
$(document).on("change", ".input-check", function () {
  const checked = $(this).prop("checked");
  console.log(checked);
  if (checked) {
    $(this).closest(".list").addClass("done");
  } else {
    $(this).closest(".list").removeClass("done");
  }
});

$(document).on("click", ".btn-edit", function () {
  // 어떤 document를 클릭했을때 btn-edit 클래스가 선택됨.
  const text = prompt("수정할 내용을 입력하세요.");
  $(this).parent().find(".todo-text").text(text);
  // this의 바로위 부모요소에 class todo-text란 놈을찾아서 text가 들어간다
});
