import AddItem from './AddItem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react'
import SearchItems from './SearchItems'
import apiRequest from './ApiRequest';

function App() {
  const API_URL = "http://localhost:3001/items"
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setfetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not recieved")
        const listItems = await response.json();
        setItems(listItems);
        setfetchError(null)
      } catch (err) {
        setfetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())() //For is loading function the function is called inside the setTimeout function  
    }, 2000)
  }, [])


  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItems(listItems);
    // localStorage.setItem('todo_list', JSON.stringify(listItems));

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL, postOptions)
    if (result) setfetchError(result)
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    // localStorage.setItem('todo_list', JSON.stringify(listCheck));

    const myItems = listItems.filter((item) => item.id === id)

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItems[0].checked })
    }

    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setfetchError(result)
  }

  const handleDelete = async (id) => {
    const deleteItem = items.filter((item) => item.id !== id)
    setItems(deleteItem);
    // localStorage.setItem('todo_list', JSON.stringify(deleteItem));

    const deleteOptions = { method: 'DELETE' }

    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setfetchError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    setNewItem('')
    addItem(newItem);
  }

  return (
    <div className='App'>
      <Header title="React Application" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItems
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
