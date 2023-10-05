import React from "react"

const SearchItems = ({search, setSearch}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchItem">Search Items</label>
            <input
                placeholder="Search Items"
                id="searchItem"
                type="text"
                role="searchbox"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItems