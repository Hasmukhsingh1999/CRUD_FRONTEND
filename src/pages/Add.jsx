import axios from "axios";
import {  useState } from "react";

const Add = () => {
  const bookData = {
    title: "",
    desc: "",
    price: null,
    cover: "",
  };
  const [book, setBook] = useState(bookData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios("https://localhost:8800/books", book);
      console.log(res.data);
      setBook(bookData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>ADD new Book</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="title"
          value={book.title}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="desc"
          value={book.desc}
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="price"
          value={book.price}
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="cover"
          value={book.cover}
        />
      </form>
    </div>
  );
};

export default Add;
