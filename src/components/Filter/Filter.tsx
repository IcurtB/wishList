import React, {useState} from "react"
import { booksData } from "../../data/booksData"
type changeInput = {
    onChangeAuthor: (e:React.ChangeEvent<HTMLInputElement>) => void
}
const Filter:React.FC<changeInput> = ({onChangeAuthor}) => {

    // const onChangeAuthor = (e:React.ChangeEvent<HTMLInputElement>) => {
    //         console.log(booksData.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
    // }
    return(
        <>
            <input type="search" onChange={(e) => onChangeAuthor(e)} />
        </>
    )
}

export default Filter