import React from "react"
import { FaPlus } from "react-icons/fa"

function AddItem({ newItem, setNewItem, handleSubmit }) {
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Items</label>
            <input
                placeholder="Add Items"
                id="addItem"
                type="text"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add Item"
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem