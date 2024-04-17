import { useState } from "react";
import "./style.css";

export const Todo =()=> {

  const [incomplateTodos,setIncomplateTodos] = useState([
    "todoです",
    "todoです2",
  ]);

  const [complateTodos,setComplateTodos] = useState([
                       "todoでした",
                       "todoでした2"
                       ]);


  return (

     <>

      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>

      </div>


      <div className="incomplate-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incomplateTodos.map((todo) => (
              <li key ={todo} >
                  <div className="list-row">
                    <p className="todo-item">{todo}</p>
                    <button>完了</button>
                    <button>削除</button>
                  </div>
              </li>



            )

          ) }

        </ul>
      </div>





      <div className = "complate-area">
        <p className="title">完了のtodo</p>
        <ul>
            {complateTodos.map((Todo) => (

              <li key ={Todo} >
                    <div className="list-row">
                      <p className="todo-item">{Todo}</p>
                      <button>戻す</button>
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

