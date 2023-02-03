import React from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
import { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link }  from 'react-router-dom'


function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.itemReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM' });
  }, [dispatch]);


  return (
    <div className="container">
      <ShoppingForm />
      <h2>Shelf</h2>
      
        {
          items.map((item) => {
            return (
              <div key={item.id}>
                {console.log(item.id)}
                {item.description}
                <img src={item.image_url}/>
                <Link to={`/info/${item.id}`}>
                  <button>Edit</button>
                </Link>
              </div>
            )
          })
        }
      
    </div>
  );
}

export default ShelfPage;
