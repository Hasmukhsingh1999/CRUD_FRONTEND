import { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks(2);
  }, []);

  return <div>Books</div>;
};

export default Books;
