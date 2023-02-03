import React from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.itemReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM' });
  }, [dispatch]);

  const deleteItem = (id) => {
    dispatch({
      type: 'SAGA/DELETE_FROM_LIST',
      payload: id
    })
  }


  return (
    <div className="container">
      <ShoppingForm />
      <h2>Shelf</h2>
      
        {
          items.map((item) => {
            return (
              <div key={item.id}>
                {item.description}
                <button onClick={() => deleteItem(item.id)}>DELETE</button>
                <img src={item.image_url}/>
              </div>
            )
          })
        }
      
    </div>
  );
}

export default ShelfPage;
