import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import SearchItem from './SearchItem';
import Footer from './Footer';
import './index.css'
import {useState} from 'react'


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length-1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item,checked: !item.checked } : item);
    setAndSaveItems(listItems);

  };

  const handleDelete = (id) => {
    console.log(id)
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems);

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem)return;
    //add Item
    addItem(newItem)
    setNewItem('')
    console.log('Submitted')
  }

  return (
    <div className="App">
      <Header title='Groceries List' />     
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
      search={search}
      setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
