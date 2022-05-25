import React, {useState} from 'react';
import { useForm, SubmitHandler, Resolver } from "react-hook-form"
import Books from "./components/Books/Books";
import Filter from "./components/Filter/Filter";
import { booksData } from "./data/booksData"
import {IBooks} from "./interface";
import AddBookForm from "./components/AddBookForm/AddBookForm";
import Info from "./components/Info/Info"


function App() {
    const [books, setBooks] = useState<IBooks[]>(booksData)
    const [active ,setActive] = useState<boolean>(false)
    console.log(booksData);


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
    /***
     * знаю что это корявое решение,
     * но я по другому пока не придумал.
     * В обычном crud я бы сделал эту логику понятной,
     * но так как я беру данные из внутреннего хранилища - это выглядит по дурацкому.
     ***/
    const addBook:SubmitHandler<IBooks> = (data:IBooks):void => {
        booksData.push(data)
    }


    return (
    <>
      <Books books={books}/>
      <Filter onChangeAuthor={onChangeAuthor}
              sortBy={sortBy}
              filter={filter}
      />
      <AddBookForm addBook={addBook}/>
      <Info total={books.length}/>
    </>
  );
}

export default App;
