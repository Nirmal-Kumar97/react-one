import React from 'react';
import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => {
    // function handleNames() {
    //     const names = ['Earn', 'Give', 'Save']
    //     const int = Math.floor(Math.random() * 3)
    //     return names[int]
    // }

    // const handleClick = (name) => {
    //     console.log(`Thanks for subscribing ${name}`)
    // }

    // const handleClick2 = (e) => {
    //     console.log(e.target.innerText)
    // }
    // const [count, setCount] = useState(99)
    // const [textChange, setText] = useState("Save")

    // function changeText() {
    //     const names = ["Save", "Give", "Donate"]
    //     const int = Math.floor(Math.random() * 3)
    //     return setText(names[int])
    // }

    // function functionIncrement() {
    //     setCount(preCount => preCount + 1)
    // }

    // function functionDecrement() {
    //     setCount(preCount => preCount - 1)
    // }

    return (
        <div>
            <main>
                {/* <p onDoubleClick={() => handleClick('Nirmal')}>
                    I love to {handleNames()} money
                </p> */}
                {/* <p>
                    I love to {textChange} money
                </p> */}
                {/* <button onClick={() => handleClick('Nirmal')}>Subscribe</button>
                <button onClick={(e) => handleClick2(e)}>Subscribe</button> */}
                {/* <button onClick={changeText}>Subscribe</button>
                <button onClick={functionDecrement}>-</button>
                <span>{count}</span>
                <button onClick={functionIncrement}>+</button> */}
                {(items.length) ? (
                    <ItemsList
                        items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ) : (<p>Your list is empty</p>)
                }
            </main>
        </div>
    )
}

export default Content