import React from "react";
type total = {
    total: number
}
const Info:React.FC<total> = ({total}) => {
    return(
        <>
            <p>Сейчас в базе книг {total}</p>
        </>
    )
}
export default Info