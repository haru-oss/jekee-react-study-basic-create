import "./style.css";

export const Todo =()=> {

  return (

     <>

      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>

      </div>


      <div className="incomplate-area">
        <p className="title">未完了のtodo</p>
        <ul>
              <li>
                  <div className="list-row">
                    <p className="todo-item">todoです</p>
                    <button>完了</button>
                    <button>削除</button>
                  </div>
              </li>
              <li>
                  <div className="list-row">
                    <p className="todo-item">todoです</p>
                    <button>完了</button>
                    <button>削除</button>
                  </div>
              </li>
        </ul>
      </div>



      <div className = "complate-area">
        <p className="title">完了のtodo</p>
        <ul>
          <div>
             <li className="list-row">
               <p className="todo-item">todoでした</p>
               <button>戻す</button>
             </li>
          </div>

          <div>
             <li className="list-row">
               <p className="todo-item">todoでした</p>
               <button>戻す</button>
             </li>
          </div>

        </ul>
      </div>



    </>



  );
};


// truthy,falthyについて
// "abc" 0 10 undefined null false NaN "" [] {}

const val = 0 ;
if (val){
  console.log("valはtruthyです");
}else {
    console.log("valはfalthyです");
  }


