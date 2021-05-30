import s from "./message.module.css";

const Message = (props) =>{
    return(
        <div className={`${s.message}`}>
                <div className={`${s.avamessage}`}>
                </div>
                <div className={`${s.textmessage}`}>
                    {props.mes}
                </div>
        </div>
    )
}
export default Message;