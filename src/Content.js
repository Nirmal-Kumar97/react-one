import React from 'react';
import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <div>
            <>
                {(items.length) ? (
                    <ItemsList
                        items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ) : (<p>Your list is empty</p>)
                }
            </>
        </div>
    )
}

export default Content