import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const myStyle = {
    movie : {
        width:'100%'
    }
}



export default class Details extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            id : props.match.params.id,
            movie: null,
        }
    }


    getMoviesDetailsFromServer(id){

        const url = 'https://yts.mx/api/v2/movie_details.json?movie_id='+id;


        fetch(url)
        
        .then(response => response.json())
        .then((data) =>{
            console.log(data);
            
            this.setState({
                movie: data.data.movie
            })

        })
        
        
        .catch((err)=>{
            console.log(err);
        })

    }

    
    componentDidMount(){
        this.getMoviesDetailsFromServer(this.state.id);
    }


    render(){

        console.log(this.state.movies);
        return (
            <div className="container">

                {
                    this.state.movie === null ?
                    <p>Loading...</p>
                    :
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{width:'100%'}} className="card-img-top" src={this.state.movie.large_cover_image} alt="Card image cap" />
                                   
                        
                        </div>

                        <div className="col-md-6">
                                <div className="card movie"  >
                                    <div className="card-body">
                                        <h5 className="card-title">{this.state.movie.title_english}</h5>
                                         <p>
                                             {
                                                 this.state.movie.description_intro
                                             }
                                         </p>


                                         <div>
                                         {
                                             this.state.movie.torrents.map((t)=>{
                                                 return( <a href={t.url} className="btn btn-sm btn-primary" download style={{marginRight:15}}> {t.quality} {t.size} </a> );
                                             })
                                         }
                                        </div>
                                    </div>
                                    </div>
                                </div>

                    </div>

                }
            </div>
          );
    }
}