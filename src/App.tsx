import React, {useEffect, useState} from 'react';
import { useForm, SubmitHandler, Resolver } from "react-hook-form"
import Books from "./components/Books/Books";
import Filter from "./components/Filter/Filter";
import { booksData } from "./data/booksData"
import {IBooks} from "./interface";
import AddBookForm from "./components/AddBookForm/AddBookForm";
import Info from "./components/Info/Info"
import axios from "axios";
import s from "./App.module.css"
import WishList from "./components/WishList/WishList";


function App() {
    const [books, setBooks] = useState<IBooks[]>(booksData)
    const [active ,setActive] = useState<boolean>(false)
    // console.log(books)
    /*** сортировка по авторству ***/
    const onChangeAuthor = (e:React.ChangeEvent<HTMLInputElement>) => {
        setBooks(booksData.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    /*** сортировка по алфавиту  ***/
    const sortBy = (a:any, b:any ) => {
        return a.title.localeCompare(b.title)
    }
    const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActive(active ? false : true)
        active ? setBooks(books) : setBooks(books.sort(sortBy))
    }
    /***
      знаю что это корявое решение,
      но по другому пока не придумал.
      В обычном api запросами, я бы сделал эту логику понятной,
      но так как я беру данные из внутреннего хранилища - это выглядит по дурацкому.
     ***/
    const addBook:SubmitHandler<IBooks> = (data:IBooks):void => {
        booksData.push(data)
        /*** Добавление в localStorage ***/
        localStorage.setItem("books", JSON.stringify(data))
    }


    return (
    <>

        <div className={s.books}>
            <Books books={books}/>
            <div>
                <Filter onChangeAuthor={onChangeAuthor}
                        sortBy={sortBy}
                        filter={filter}
                />
                <AddBookForm addBook={addBook}/>
                <Info total={books.length}/>
            </div>
            <WishList/>
        </div>

    </>
  );
}

export default App;
