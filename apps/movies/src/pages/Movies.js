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



export default class Movies extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies: [],
        }
    }


    getMoviesListFromServer(query){

        const url = 'https://yts.mx/api/v2/list_movies.json?query_term='+query;


        fetch(url)
        
        .then(response => response.json())
        .then((data) =>{
            console.log(data);
            

            this.setState({
                movies : data.data.movies !== null ? data.data.movies : []
            })
        })
        
        
        .catch((err)=>{
            console.log(err);
        })

    }

    hundleSearch(e){
        const q = e.target.value;
        this.getMoviesListFromServer(q);


    }

    componentDidMount(){
        this.getMoviesListFromServer('');
    }


    render(){

        console.log(this.state.movies);
        return (
            <div className="container">

                <header className="my-5">
                    <div className="row">
                        <div className="col-sm-10">
                            <input onChange={ (e)=>{ this.hundleSearch(e)} } placeholder="Search ..." className="form-control" />
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-primary btn-block">SEARCH</button>
                        </div>
                    </div>
                </header>

                <div className="row">
                    
                    {
                       this.state.movies != null ?
                       this.state.movies.map((movie)=>{
                        return  (

                            <div key={ movie.id } className="col-sm-12 col-md-3">
                                <div className="card movie" style= { myStyle.movie } >
                                    <img className="card-img-top" src={movie.large_cover_image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title_english}</h5>
                                         <Link to={ '/details/'+movie.id }>Details</Link>
                                    </div>
                                    </div>
                                </div>
                        );
                    })
                       :
                       <p>No result ...</p>
                    }
                    
                    





                </div>

            </div>
          );
    }
}