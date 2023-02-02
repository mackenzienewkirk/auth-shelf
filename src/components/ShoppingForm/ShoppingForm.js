import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShoppingForm() {


    const dispatch = useDispatch();

    //declare pieces of state for the inputs
    const [descriptionInput, setDiscriptionInput] = useState('');
    const [photoInput, setPhotoInput] = useState('');

    const addToShelf = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SAGA/ADD_TO_SHELF',
            payload: {
                description: descriptionInput,
                url: photoInput
            }
        })
        //clear inputs
        setDiscriptionInput('');
        setPhotoInput('');
    }

    return (
        <>
            <form onSubmit={addToShelf}>
                <input 
                    value={descriptionInput}
                    placeholder="Enter item description"
                    onChange={(event) => setDiscriptionInput(event.target.value)}
                />
                <input 
                    value={photoInput}
                    placeholder="Add link to image"
                    onChange={(event) => {setPhotoInput(event.target.value)}}
                />
                <button tyoe="submit">
                    Add Item
                </button>
            </form>
        </>
    )
}

export default ShoppingForm;