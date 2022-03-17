1. Element.classList.toggle
   toggle, 전등 스위치를 껐다 켰다 하는 행위 처럼, 0과 1이 반복되는 행위를 의미합니다.
   즉, 기존 값이 0이었다면 1로 바뀌고 기존 값이 1이었다면, 0으로 바뀌게 됩니다.
   그래서 toggle 메서드는 클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지 않는다면 클래스를 추가하는 메서드입니다.

2. Element.classList.add
   명시된 클래스를 추가하는 메서드입니다.

3. Element.classList.remove
   명시된 클래스를 제거하는 메서드입니다.

4. toggleClass("class명")
   해당 클래스가 제거되고 없을때는 추가된다.
   toggleClass("class명", switch)
   switch 의 값이 true 일 경우 적용되고 false경우 제거된다.
