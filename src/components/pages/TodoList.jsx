import { useRef, useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  //   const [nextid, setNextid] = useState([]);
  const nextId = useRef(1);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = [
      ...todoList,
      { id: nextId.current, text: text, isDone: true },
    ];
    setTodoList(newTodoList);
    setText("");
    nextId.current++;
  };

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  };

  const handleEdit = (id) => {
    const newText = prompt("입력하세요");
    const newTodoList = todoList.map((todo) => {
      // if (todo.id === id) {
      //   return { ...todo, text: newText };
      // }
      // return todo;
      return todo.id === id ? { ...todo, text: newText } : todo;
    });
    setTodoList(newTodoList);
  };

  const handleChecked = (id, checked) => {
    const newTodoList = todoList.map((todo) => {
      return todo.id === id ? { ...todo, isDone: checked } : todo;
    });
    setTodoList(newTodoList);
  };

  // const handleAllDelete = () => {
  //   setTodoList([]);
  // };

  const HandleAllCheck = (checked) => {
    const newTodoList = todoList.map((todo) => ({ ...todo, isDone: checked }));
    setTodoList(newTodoList);
  };

  const toggleCheckAll = () => {
    const newTodoList = todoList.map((todo) => {
      return { todo, isDone: !todo.isDone };
    });
    setTodoList(newTodoList);
  };
  return (
    <Container>
      <Title>일정관리</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputText
            placeholder="할일을 입력하세요."
            onChange={handleText}
            value={text}
          />
          <BtnSubmit>+</BtnSubmit>
          <BtnAllDelete type="button" onClick={() => setTodoList([])}>
            전체삭제
          </BtnAllDelete>
          {/*\ <BtnAllDelete type="button" onClick={() => handleAllDelete()}>
            전체삭제
          </BtnAllDelete> */}
          <BtnAllDelete type="button" onClick={() => HandleAllCheck(true)}>
            전체체크On
          </BtnAllDelete>
          <BtnAllDelete type="button" onClick={() => HandleAllCheck(false)}>
            전체체크Off
          </BtnAllDelete>
          <BtnAllDelete type="button" onClick={() => toggleCheckAll()}>
            전체반전
          </BtnAllDelete>
        </InputWrapper>
      </form>
      <List>
        {todoList.map((todo) => (
          <Item isDone={todo.isDone} key={todo.id}>
            <label>
              <Checkbox
                type="checkbox"
                checked={todo.isDone}
                onChange={(e) => handleChecked(todo.id, e.target.checked)}
              />
              <Content>{todo.text}</Content>
            </label>
            <BtnWrapper>
              <BtnEdit onClick={() => handleEdit(todo.id)}>수정</BtnEdit>
              <BtnDelete onClick={() => handleDelete(todo.id)}>삭제</BtnDelete>
            </BtnWrapper>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const BtnAllDelete = styled.button``;

const Container = styled.div`
  border: 1px solid black;
  margin: 0;
  padding: 0;
  background-color: white;
  text-align: center;
  width: 512px;
  margin: auto;
  margin-top: 100px;
`;
const Title = styled.div`
  background-color: skyblue;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputWrapper = styled.div`
  background: #495057;
  display: flex;
`;

const InputText = styled.input`
  background: none;
  outline: none;
  border: none;
  color: white;
  line-height: 1.5rem;
  flex: 1;
  color: white;
`;

const BtnSubmit = styled.button`
  background-color: #868e96;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  color: white;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
`;
const Content = styled.span``;
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 50px;
  & + & {
    border-top: 1px solid #ddd;
  }
  background: ${(props) => props.isDone && "#efefef"};
  &:hover {
    background-color: #8b8888;
  }

  ${Content} {
    text-decoration: ${(props) => props.isDone && "line-through"};
  }
`;
const Checkbox = styled.input`
  margin: 0 20px;
`;
const BtnWrapper = styled.div`
  margin: 10px;
`;
const BtnEdit = styled.button`
  margin-right: 10px;
  width: 70px;
  border-radius: 10px;
  border: 2px solid red;
`;
const BtnDelete = styled.button`
  width: 70px;
  border-radius: 10px;
  border: 2px solid red;
`;

export default TodoList;
