import React, {useEffect} from "react"

const WishList: React.FC = () => {


    const books =  localStorage.getItem("books" )
    const booksArr:any[] =   Object.values(JSON.parse(books|| "{}"))



    return(
        <>
            <p>
                Книги которые вам приглянулись
                {booksArr.map(item => item.title)}
            </p>
        </>
    )
}
export default WishList