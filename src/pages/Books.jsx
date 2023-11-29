import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  const handleClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = () => {};

  return (
    <div>
      <h1>Book Shop</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cover</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr className="book" key={book.id}>
              <td>{book.id}</td>
              <td>{book.cover && <img src={book.cover} alt="" />}</td>
              <td>{book.title}</td>
              <td>{book.desc}</td>
              <td>{book.price}</td>
              <div>
                <button onClick={() => handleClick(book.id)}>Delete</button>
                <button onClick={() => handleUpdate}>
                  <Link to={`update/${book.id}`}>Update</Link>
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/add"}>Add book</Link>
    </div>
  );
};

export default Books;
