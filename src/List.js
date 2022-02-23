import React from 'react';
const [todo, setTodo] = useState ('xxx')

const List = ({items, name}) => (
  <div>
    <h2>{name}</h2>
    <form onSubmit={handleSubmit}>
      <p>todo: </p>
      <input value={todo} onChange={(e)=> {setTodo(e.target.value)}} />
    </form>
    <ul>
      { items.map( item => <li key={item.id}>{item.name}</li>) }
    </ul>
  </div>
);


export default List;