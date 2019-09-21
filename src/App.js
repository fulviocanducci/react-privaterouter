import React, {useEffect, useState} from 'react';
import todosModel from './models/TodosModel';

function App({history}) {
  const [items, setItems] = useState([]);
  
  function loadItems() {
    todosModel.list()
      .then(result => setItems(result))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    //todosModel.add({id: 1, description: 'third', done: true}).then((r) => console.log(r));
    loadItems();    
  }, []);

  useEffect(() => {
    
  },[items]);

  function redirectTo(to) {
    history.push(to);
  }
  function render() {
    const keys = Object.keys(items);
    return keys.map((key, index) => 
      (<tr key={key + index}> 
        <td>{key}</td>       
        <td>{items[key].description}</td>
        <td>{items[key].done?1:0}</td>
        <td><button onClick={_ => redirectTo(`/edit/${key}`)}>Edit</button></td>
      </tr>)
    );
  }
  return (
    <> 
      <h1 className="title">
        App
      </h1>
      <h2 className="subtitle">
        Aplicative
      </h2>
      <div>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Key</th>
              <th>Description</th>
              <th>Done</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (<><tr><td colSpan="4">Carregando ...</td></tr></>):null}
            {render()}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
