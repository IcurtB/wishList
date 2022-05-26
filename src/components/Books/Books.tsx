import React, {useState, useRef, useEffect} from "react"
import {IBooks} from "../../interface";
import { booksData } from "../../data/booksData"

import s from "./Books.module.css"
import axios from "axios";

type booksType = {
    books: IBooks[]
}

const Books:React.FC<booksType> = ({books}) => {
    // const [active, setActive] = useState<[]>([])
    const [active, setActive] = useState<boolean>(false)

    const getCheck = (data:any) => {
        const id = data.id
        const book = localStorage.getItem("books")
        let newBooks = {
            [id]:{
                id: data.id,
                title: data.title,
                genre: data.genre
            }
        }
        if(book){
            let bookStorage = JSON.parse(book)
            newBooks = {
                ...newBooks,
                ...bookStorage
            }
        }
        localStorage.setItem("books", JSON.stringify(newBooks))

        // setActive(active ? false : true)
    }
    return(
        <>
            <div className={s.container}>
                <div className={s.bookList}>
                    {books.map(item => {
                        return(
                            <div className={s.bookItem} key={item.id}>
                                <p>{item.title}</p>
                                <img className={active ? s.false : s.true} src={item.imageLink} alt=""/>
                                <input type="checkbox" onChange={() => getCheck(item)}/>
                            </div>
                        )
                    })}
                    {/*{bks.map(item => <img src={item.volumeInfo.imageLinks.smallThumbnail} alt=""/>)}*/}
                </div>
            </div>
            {/*{*/}
            {/*    */}
            {/*}*/}
        </>
    )
}
export default Books;