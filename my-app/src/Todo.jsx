import { useState } from "react";
import "./style.css";

export const Todo =()=> {


  const [todoText,setTodoText] = useState("");
  const [incomplateTodos,setIncomplateTodos] = useState([
    "todoです",
    "todoです2",
  ]);


  const [complateTodos,setComplateTodos] = useState([
                       "todoでした",
                       "todoでした2"
                       ]);


  const onChangeTodoText =  (event) => setTodoText(event.target.value);

// onchangeなどのイベントが発火すると、「eventという引数が渡ってくるようになっている。」

  const onClickAdd = () => {
    if (todoText === "")return;
    const newTodos = [...incomplateTodos,todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };


const onClickDelete = (geri) => {
  const newTodos = [...incomplateTodos];
  newTodos.splice(geri,1);
  // 特定の配列の何番目の要素から何個削除するおいうメソッド
//  geri番目押されたら、geri番目の要素から１個削除する。
  setIncomplateTodos(newTodos);

};

const g = (index) => {
  alert(index);
};


  return (

     <>

      <div className="input-area">
        <input placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

{/* onchangeってなんだ？ 　＝>  テキストボックスに変更があった時に発火するイベント*/}



      <div className="incomplate-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incomplateTodos.map((todo,geri) => (
              <li key ={todo} >
                  <div className="list-row">
                    <p className="todo-item">{todo}</p>
                    <button>完了</button>
                    <button onClick={() => onClickDelete(geri)}>削除</button>
                  </div>
              </li>



            )

          ) }

        </ul>
      </div>





      <div className = "complate-area">
        <p className="title">完了のtodo</p>
        <ul>
            {complateTodos.map((Todo,index) => (

              <li key ={Todo} >
                    <div className="list-row">
                      <p className="todo-item">{Todo}</p>
                      <button onClick={()=> g(index)}>戻す</button>
                    </div>
              </li>
                 )
                )
            }


        </ul>
      </div>




    </>


  );
};

