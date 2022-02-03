import { useRef, useState } from "react";

interface IToDo {
  id: number;
  text: string;
}

function ToDo() {
  const [todo, setToDo] = useState<IToDo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (text: IToDo["text"]) => {
    return setToDo([...todo, { text, id: todo.length + 1 }]);
  };

  const removeToDo = (id: IToDo["id"]) => {
    return setToDo([...todo.filter((t) => t.id !== id)]);
  };
  return (
    <div>
      <h3>You have {todo.length} todos.</h3>
      <ul>
        {todo.map((t) => {
          return (
            <li key={t.id}>
              <h4>{t.text}</h4>
              <button onClick={() => removeToDo(t.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <input ref={inputRef} type="text" placeholder="Your next todo" />
      <button
        onClick={() => {
          if (inputRef.current?.value) {
            handleClick(inputRef.current.value);
            inputRef.current.value = "";
          }
        }}
      >
        Add todo
      </button>
    </div>
  );
}

export default ToDo;
