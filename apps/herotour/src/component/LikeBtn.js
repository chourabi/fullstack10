import  React  from "react";

class LikeBtn extends React.Component{

    constructor(props){
        super(props);

        console.log(props);
        this.state = {
            nbrLikes : props.nbrLikes,
            didLike : props.didLike,
            likeFn : props.likeFn
        }
    }

    updateLikeStatus(){
        this.setState({
            didLike : (! this.state.didLike ),
            nbrLikes: this.state.didLike === false ? (this.state.nbrLikes + 1) :(this.state.nbrLikes -1)
        })

        this.state.likeFn()
    }

    render(){
        return(
            <div>
                <button onClick={ ()=>{ this.updateLikeStatus() } }>
                    {
                        this.state.didLike === false ? 'LIKE '+this.state.nbrLikes  :'DISLIKE '+this.state.nbrLikes
                    }
                </button>
            </div>
        );
    }
}

export default LikeBtn;