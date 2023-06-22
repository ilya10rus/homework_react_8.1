import style from './app.module.css';
import {useEffect, useState} from 'react';


export const Application = function(){

  const [todos, setTodos] = useState([]);

  useEffect(() => {
      
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
          
    setTodos(loadedProducts);
        
  });

  }, []);


  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {todos.map(({id,title})=>(<div key={id} className={style.todos}>{title}</div>))}
      </div>
    </div>
  );
}