import './main.css';
import {book_slice} from './book_slice';
import { useSelector, useDispatch } from 'react-redux';

function MainFunc(props) {
  const state = useSelector(store => store.book_slice)
  const dispatch = useDispatch();
  return (
    <div className="top_box">
      <div>
        <div>
          {state.books.map((book, book_index) => (
            <div key={book.id} style={{border: "solid red 1px", padding: "10px"}} >
              Book-{book.id}
              <div>
                {book.is_open &&
                  <img src="https://thumbs.dreamstime.com/z/open-book-vector-icon-white-background-53193927.jpg"
                      style={{width: "40px"}} />}
                {!book.is_open &&
                  <img src="https://image.shutterstock.com/image-vector/closed-book-bookmark-icon-vector-260nw-1438430336.jpg"
                      style={{width: "40px"}} />}
              </div>
              <div>Price = {book.price}</div>
              <button onClick={() => dispatch(book_slice.actions.open(book_index))} >Open</button>
              <button onClick={() => dispatch(book_slice.actions.close(book_index))} >Close</button>
              <button onClick={() => dispatch(book_slice.actions.increase_price({book_index: book_index, price: 100}))} >Increase Price</button>
            </div>
          ))}
        </div>
        <button onClick={() => dispatch(book_slice.actions.add())} >Add</button>
      </div>
    </div>
  );
}

export default MainFunc;
