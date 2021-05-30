import React from "react";
import s from "../news.module.css"
const Pages = (props) => {
    return (
        <div className={s.pages}>
            {
                props.pages.map((e) => {
                    return (
                        <span>
                            {e == props.activapage - 1 && e !== 1 && e !== props.pages.length || e == props.activapage - 1 && props.activapage == props.pages.length ? " ... " : " "}
                            <span onClick={(event) => {props.setnewactivepage(e); props.pagechenged(e)}} className={e == props.activapage ? s.activepage : s.unactivepage}> 
                             {e} 
                             </span>
                            {e == props.activapage + 1 && e !== props.pages.length ? " ... " : " "}
                        </span>
                    )
                }).filter((element, index) => {
                    if (index == 0 ||
                        index == 1 ||
                        index == props.activapage - 2 ||
                        index == props.activapage ||
                        index == props.activapage - 1 ||
                        index == props.pages.length - 1 ||
                        index == props.pages.length - 2) {
                        return true
                    }
                })
            }
        </div>
    )
}
export default Pages;