import React from "react"
import loading from "../../../imges/spinner-icon-gif-29"
import s from "./loadimg.module.css"
const Loading = () => {
    return (
        <div className={s.loadingcon} >
            <img className={s.loading} src={`${loading}`} />
        </div>

    )
}
export default Loading;