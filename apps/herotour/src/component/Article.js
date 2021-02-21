import  React  from "react";
import LikeBtn from "./LikeBtn";

class Article extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           didLike:props.didLike,
           nbrLikes:props.nbrLikes
        }
    }

    sendLikeToServer(){
        console.log("about to send like to server");
    }


    render(){
        return(
            <div>
                <h3>This is article test</h3>
                <p>
                    this is a small description
                </p>
                <LikeBtn likeFn={this.sendLikeToServer} nbrLikes={this.state.nbrLikes} didLike={this.state.didLike} />
            </div>
        );
    }
}

export default Article;