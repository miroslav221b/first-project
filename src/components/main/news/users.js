import React from "react";
import s from "./news.module.css"
import User from "./user/oneuser";
import * as axios from "axios"
import icon from "../../../imges/ffa09aec412db3f54deadf1b3781de2a.png"
import Pages from "./pages/pages";
import Loading from "../../comons/loading/loading";
class Users extends React.Component {
    componentDidMount() {
        this.pagechenged(this.props.activapage)
    }
    setnewactivepage = (newactivepage) => {
        this.props.setnewactivepage(newactivepage)
    }
    pagechenged = (e) => {
        this.props.changerel()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersononepage}&page=${e}`).then(data => {
            this.props.setpages(data.data.totalCount)
            this.props.getusers(data.data.items)
            this.props.changerel()
        })
    }
    render() {
        return (
            <div className={s.block}>

                <Pages
                    activapage={this.props.activapage}
                    pages={this.props.pages}

                    setnewactivepage={this.setnewactivepage}
                    pagechenged={this.pagechenged}
                />

                {this.props.reload?<Loading/>:
                this.props.users.map((user) => {
                    return (<User
                        followed={`${user.followed}`}
                        nick={`${user.name}`}
                        id={`${user.id}`}
                        status={`${user.status == null ? "no status" : user.status}`}
                        avatar={`${user.photos.small == null ? icon : user.photos.small}`}

                        unfollow={this.props.unfollow}
                        folow={this.props.folow} />)})}
            </div>
        )
    }

}
export default Users;