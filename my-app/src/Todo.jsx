import "./style.css";

export const Todo =()=> {
  return (

     <>

      <div>
        <input placeholder="Todoを入力" />
        <buttonv>追加</buttonv>

      </div>


      <div>
        <p>未完了のtodo</p>
        <ul>
          <li>
            <p>todoです</p>
            <button>完了</button>
            <button>削除</button>
          </li>


          <li>
            <p>todoです</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>



      <div>
        <p>完了のtodo</p>
        <ul>
          <li>
            <p>todoでした</p>
            <button>戻す</button>
          </li>


          <li>
            <p>todoでした</p>
            <button>戻す</button>

          </li>
        </ul>
      </div>



    </>



  );
};


