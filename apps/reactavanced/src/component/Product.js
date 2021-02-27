import { Link } from "react-router-dom";

function Product(props){
    return(
        <div  className={ props.displayProduit } style={{padding:15}} >

                      <div className="card" style={ { width:"100%"  } }  >
                        <img className="card-img-top" src={props.produit.imgURL} alt="Card image cap" />
                        <div className="card-body">
                          <h5 className="card-title">{props.produit.title}</h5>
                          <p className="card-text">{props.produit.price}$</p>
                          <p className="card-text">{props.produit.description}</p>
                          
                          <Link to={'/products/'+props.produit.id} >Details</Link>
                          
                        </div>
                      </div>

                    </div>
    );
}

export default Product;