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
      
        {
          items.map((item) => {
            return (
              <div key={item.id}>
                {item.description}
                <img src={item.image_url}/>
              </div>
            )
          })
        }
      
    </div>
  );
}

export default ShelfPage;
