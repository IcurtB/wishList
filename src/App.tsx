import React, {useState} from 'react';
import Books from "./components/Books/Books";
import Filter from "./components/Filter/Filter";
import { booksData } from "./data/booksData"
import {IBooks} from "./interface";
import set = Reflect.set;
interface sortByType  {
    author?: object
}
function App() {
    const [books, setBooks] = useState<IBooks[]>(booksData)
    const [active ,setActive] = useState<boolean>(false)
    // console.log(booksData);


    // console.log(books)
    /*** сортировка по авторству ***/
    const onChangeAuthor = (e:React.ChangeEvent<HTMLInputElement>) => {
        setBooks(booksData.filter(item => item.author.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    /*** сортировка по алфавиту  ***/
    const sortBy = (a:any, b:any ) => {
        return a.author.localeCompare(b.author)
    }
    const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActive(active ? false : true)
        active ? setBooks(booksData) : setBooks(booksData.sort(sortBy))
    }



    return (
    <>
      <Books books={books}/>
      <Filter onChangeAuthor={onChangeAuthor}
              sortBy={sortBy}
              filter={filter}
      />
    </>
  );
}

export default App;
