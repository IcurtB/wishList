import React, {useState} from "react"
import { booksData } from "../../data/booksData"


type changeInput = {
    onChangeAuthor: (e:React.ChangeEvent<HTMLInputElement>) => void
    sortBy: any
    filter: (e:React.ChangeEvent<HTMLInputElement>) => void
}
const Filter:React.FC<changeInput> = ({onChangeAuthor, sortBy, filter, }) => {
    // const filter = () => {
    //     setActive(active ? false : true)
    //
    // }
    return(
        <>
            <input type="search" onChange={(e) => onChangeAuthor(e)} />
            <input type="checkbox" onChange={filter}/>
        </>
    )
}

export default Filter