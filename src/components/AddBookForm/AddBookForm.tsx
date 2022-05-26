import React from "react"
import {IBooks} from "../../interface";
import {SubmitHandler, useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import s from "./AddBookFrom.module.css"
type bookForm = {
    addBook: any
}
type InputBookForm = {
    title: string;
    author: string;
    country: string;
    genre: string;
    language: string;
}

const AddBookForm:React.FC<bookForm> = ({addBook}) => {
    const validateSchema = Yup.object().shape({
        title: Yup.string().required("Add please book's title "),
        author: Yup.string().required("Add author"),
        country: Yup.string().required("Add country"),
        genre: Yup.string().required("Add genre"),
        language: Yup.string().required("Add language"),
    })
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IBooks>({mode:"onBlur", resolver: yupResolver(validateSchema)});
    /*** Этого id не должен был быть тут.
     <input type="text" name="id"/>
     При обычном post запросе он должен был добавлятся сразу.

     Валидация рабочая. Отликаяется на простой submit и onBlur,  предупреждая что нужно заполнить.
     ***/

    return(
        <>
            <form className={s.filterForm} onSubmit={handleSubmit(addBook)}>
                <input type="text"
                       {...register("title")}
                />
                {errors?.title && <p>{errors.title.message}</p>}
                <input type="text"
                       {...register("author")}
                />
                {errors?.author && <p>{errors.author.message}</p>}
                <input type="text"
                       {...register("country")}
                />
                {errors?.country && <p>{errors.country.message}</p>}
                <input type="text"
                       {...register("genre")}
                />
                {errors?.genre && <p>{errors.genre.message}</p>}
                <input type="text"
                       {...register("language")}
                />
                {errors?.language && <p>{errors.language.message}</p>}
                <input type="submit"/>
            </form>
        </>
    )
}
export default AddBookForm