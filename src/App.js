// import logo from './logo.svg';
import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react'
import SearchItems from './SearchItems'

function App() {
  // function handleNames() {
  //   const names = ['grow', 'serve', 'give']
  //   const int = Math.floor(Math.random() * 3);
  //   return names[int]
  // }
  const [items, setItems] = useState(
    // [
    // {
    //   id: 1,
    //   checked: true,
    //   item: 'Coading'
    // },
    // {
    //   id: 2,
    //   checked: false,
    //   item: 'Playing'
    // },
    // {
    //   id: 3,
    //   checked: true,
    //   item: 'Calling'
    // },
    // {
    //   id: 4,
    //   checked: true,
    //   item: 'Cooking'
    // },
    // {
    //   id: 5,
    //   checked: true,
    //   item: 'Reading'
    // }
    // ]
    JSON.parse(localStorage.getItem('todo_list'))
  );

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItems(listItems);
    localStorage.setItem('todo_list', JSON.stringify(listItems));
  }

  const handleCheck = (id) => {
    const listCheck = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listCheck);
    localStorage.setItem('todo_list', JSON.stringify(listCheck));
  }

  const handleDelete = (id) => {
    const deleteItem = items.filter((item) => item.id !== id)
    setItems(deleteItem);
    localStorage.setItem('todo_list', JSON.stringify(deleteItem));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    setNewItem('')
    addItem(newItem);
    console.log('Submitted')
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    //   <p>̥̥
    //     Hi this is Nirmal
    //   </p>
    //   <p>
    //     I want to {handleNames()} money
    //   </p>
    // </div>

    <div className='App'>
      <Header title="React Application" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItems
        search={search}
        setSearch = {setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
