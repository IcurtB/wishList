import React, {useState} from 'react';
import Books from "./components/Books/Books";
import Filter from "./components/Filter/Filter";
import { booksData } from "./data/booksData"
import {IBooks} from "./interface";

function App() {
    const [books, setBooks] = useState<IBooks[]>(booksData)
    const onChangeAuthor = (e:React.ChangeEvent<HTMLInputElement>) => {
        setBooks(booksData.filter(item => item.author.toLowerCase().includes(e.target.value.toLowerCase())))
    }
  return (
    <>
      <Books books={books}/>
      <Filter onChangeAuthor={onChangeAuthor}/>
    </>
  );
}

export default App;
