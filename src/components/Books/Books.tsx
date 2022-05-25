import React, {useState} from "react"
import {IBooks} from "../../interface";
import { booksData } from "../../data/booksData"

import s from "./Books.module.css"

type booksType = {
    books: IBooks[]
}
const Books:React.FC<booksType> = ({books}) => {
    // const [books, setBooks] = useState<IBooks[]>(booksData)

    return(
        <>
            <div className={s.container}>
                <div className={s.bookList}>
                    {books.map(item => {
                        return(
                            <div key={item.id}>
                                <p>{item.title}</p>
                                <img src={item.imageLink} alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/*{*/}
            {/*    */}
            {/*}*/}
        </>
    )
}
export default Books;