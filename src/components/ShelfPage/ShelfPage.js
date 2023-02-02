import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.itemReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM' });
  }, [dispatch]);


  return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
        {
          items.map((item) => {
            return <li key={item.id}>{item.description}{item.image_url}</li>
          })
        }
      </ul>
    </div>
  );
}

export default ShelfPage;
