
import React from 'react';
import Product from '../component/Product';


class Products extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      displayProduit : "col-sm-4",
      products: [
        { id:1, title:"voiture", description:"product description", price:3500 , imgURL:"https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2021/02/Coka-Cola.jpg" },
        { id:2,title:"meuble", description:"product description", price:4000 , imgURL:"https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2021/02/Coka-Cola.jpg" },
        { id:3,title:"produit cos", description:"product description", price:6000 , imgURL:"https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2021/02/Coka-Cola.jpg" },
        { id:4,title:"Sandwitch", description:"product description", price:150 , imgURL:"https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2021/02/Coka-Cola.jpg" }
      
      ],
      query:"",
      initRangePrice : 50,
      searchPrice : 3000
    }

  }

  toggleView(){
    if (this.state.displayProduit === "col-sm-4" ) {
      this.setState({
        displayProduit:"col-sm-12"
      })
    }else{
      this.setState({
        displayProduit:"col-sm-4"
      })
    }
  }


  getPriceFromPourcentage(){
    

    /**
     *  100 = >  max 6000
     *  pourcentage = > ?
     * 
     */

     var price = 0;

     price = (( 7000 * this.state.initRangePrice ) / 100 ).toFixed();

     price = Number.parseInt(price);
     

     return(price);

  }



  render(){
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-sm-3" style={ { paddingTop:150, paddingLeft:15, paddingRight:15 } } >
            <div className="card">
              <div className="form-group">
                <label>Search</label>
                <input className="form-control" onChange={ (e)=>{ this.setState({query:e.target.value}) } }   />
              </div>
              <div className="form-group">
                <label>Price  Inf { this.getPriceFromPourcentage() }  </label>
                <input type="range" className="form-control" value={this.state.initRangePrice}  onChange={ (e)=>{ console.log(e.target.value); this.setState({initRangePrice:e.target.value, searchPrice: this.getPriceFromPourcentage() })  } }   />
              </div>
              



            </div>



          </div>
          <div className="col-sm-9">

            <div className="my-5 row">
              <div className="col-md-12">
                  <button onClick={ ()=>{ this.toggleView() } } >{ this.state.displayProduit === "col-sm-4" ? 'LINE' : 'GRID' }</button>
              </div>
            </div>
            
            <div className="row">
              {
                this.state.products.map((produit)=>{
                  if ( produit.title.toLocaleLowerCase().indexOf(this.state.query.toLocaleLowerCase()) != -1  ) {
                    console.log(produit.price ,  this.state.searchPrice);
                    if (produit.price <= this.state.searchPrice) {
                      return(
                        <Product key={produit.id} produit={produit} displayProduit={this.state.displayProduit} />
                        
                      );
                    }
                  }
                })
              }
            </div>


            
          </div>
          
        </div>

      </div>
    );
  }
}

export default Products;
