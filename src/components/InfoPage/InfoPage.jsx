import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  const { id } = useParams();

  const [ descriptionInput, setDescription ] = useState('')
  const [ imageUrl, setUrl ] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'SAGA_UPDATE_SHELF',
      payload: {
        id: id,
        description: descriptionInput,
        image_url: imageUrl
      }
    });
  }


  return (
    <div className="container">
      <p>Info Page</p>
      <form onSubmit={handleSubmit}>
                <input 
                    value={descriptionInput}
                    placeholder="Enter item description"
                    onChange={(event) => setDescription(event.target.value)}
                />
                <input 
                    value={imageUrl}
                    placeholder="Add link to image"
                    onChange={(event) => {setUrl(event.target.value)}}
                />
                <button type="submit">
                    Update
                </button>
            </form>
    </div>
  );
}

export default InfoPage;
