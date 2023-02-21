import { useState } from 'react';
import products from './Products';
import "./Product.css";

function Cart() {
  // var[prod,setProd]=useState([]);
  const[getprods,setGetprods]=useState(products);
  const [count,setCount]=useState(products.length)
  var [cartProducts,setCartProducts]=useState([]);
  var [c,setC]=useState(true);
  var [flagC,setFlagC]=useState(true);
  const allproducts=()=>{
    setGetprods(products);
  }
   const addingToCart = (prod)=>{
   setCartProducts(cartProducts.push(prod));
   }
  const getproducts=()=>{
          var b=document.getElementById("brand").value;
          var c=document.getElementById("category").value;
          var min=Number(document.getElementById("minprice").value);
          var max=Number(document.getElementById("maxprice").value);
         // console.log(typeof(min));
         if(b!="" && c=="" && min=="" && max==""){
          setGetprods(products.filter((ele)=>{return ele.brand.includes(b)}))
         }
         else if(b=="" && c!="" && min=="" && max==""){
          setGetprods(products.filter((ele)=>{return ele.category==c}))
         }
         else if(b=="" && c=="" && min!="" && max==""){
          setGetprods(products.filter((ele)=>{return ele.price>=min}))
         }
         else if(b=="" && c=="" && min=="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.price<=max}))
         }
         else if(b!="" && c!="" && min=="" && max==""){
          setGetprods(products.filter((ele)=>{return ele.brand.includes(b) && ele.category==c}))
         }
         else if(b!="" && c=="" && min!="" && max==""){
          setGetprods(products.filter((ele)=>{return ele.brand.includes(b) && ele.price>=min}))
         }
         else if(b!="" && c=="" && min=="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.brand.includes(b)&& ele.price>=max}))
         }
         else if(b=="" && c!="" && min!="" && max==""){
          setGetprods(products.filter((ele)=>{return ele.category==c && ele.price>=min}))
         }
         else if(b=="" && c!="" && min=="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.category==c && ele.price<=max}))
         }
         else if(b=="" && c=="" && min!="" && max!=""){
          setGetprods(products.filter((ele)=>{return  ele.price>=min && ele.price<=max}))
         }
         else if(b!="" && c!="" && min!="" && max==""){
          setGetprods(products.filter((ele)=>{return ele.brand.includes(b) && ele.category==c && ele.price>=min}))
         }
         else if(b!="" && c!="" && min=="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.brand.includes(b) && ele.category==c && ele.price<=max}))
         }
         else if(b=="" && c!="" && min!="" && max!=""){
          setGetprods(products.filter((ele)=>{return  ele.category==c && ele.price>=min && ele.price<=max}))
         }
         else if(b!="" && c=="" && min!="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.brand.includes(b) && ele.price>=min && ele.price<=max}))
         }
         else if(b!="" && c!="" && min!="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.brand.includes(b)  && ele.category==c && ele.price>=min && ele.price<=max}))
         }
         else{
          setGetprods(products);
         }

        }
return (
    <div>
      <br/>
        {/* <button onClick={allproducts}>Allproducts</button> */}
        <input type="text" placeholder='enter brand name' id="brand" class="searchbtn" onChange={getproducts}></input>
        <input type="text" placeholder='enter category' id="category"  class="searchbtn" onChange={getproducts}></input>
        <input type="text" placeholder='enter min price' id="minprice" class="searchbtn" onChange={getproducts}></input>
        <input type="text" placeholder='enter max price' id="maxprice"  class="searchbtn" onChange={getproducts}></input>
        
        {/* <button onClick={getproducts}>Get products</button> */}
        
<button className='btn  cart1' onClick={ ()=>{
                            setCartProducts(cartProducts); 
                            setC(false);
                            setFlagC(!flagC);   
                            // console.log(cartProducts);                 
                                     }}>CART ITEMS🛒 </button>
        <br></br><br></br>
        {/* <div>
         <div style={{backgroundColor:'yellow'}}>
         <h1>CART DATA</h1>
        </div></div> */}
<h2>{getprods.length} products found</h2>
{c?getprods.map((p)=>{return <div className='card'>
          <div className='card-title'>
          {/* <p>id:{p.id}</p> */}
          </div>
          <div className='card-body'>
             <p><img src={p.image}  width="250px" height="250px"></img></p>
             <p className='b1'>{p.brand}</p>
             <p className='d1'>{p.desc}</p>
             <p className='r1'>{p.rating} ★</p>
             <p className='p1'>Rs.{p.price}/-</p>
<button className='btn btn-warning'  onClick={ ()=>{cartProducts.push(p);
      setCartProducts(cartProducts);
        console.log(cartProducts);     }
        } >add to cart</button> </div>

  </div>}):
// flagC?
cartProducts.map((cp,ind)=>{
return <div className='card'>
   <div className='card-title'>
  {/* <p>id:{cp.id}</p> */}
   </div>
  <div className='card-body'>
   <p><img src={cp.image} width="250px" height="250px"></img></p>
    {/* <p>{cp.name}</p> */}
    <p className='b1'>{cp.brand}</p>
     <p className='d1'>{cp.desc}</p>
     <p  className='r1'>{cp.rating}</p>
     <p className='p1'>Rs.{cp.price}/-</p>
     <button className='btn btn-warning'  onClick={ ()=>{
      cartProducts.splice(ind,1);
      setCartProducts(cartProducts);
        console.log(cartProducts);     }
        } >remove from cart</button>
        </div> 
       </div>
                                      
    })
    // :''
    
    }
    
      
    
    </div>
  );
}
export default Cart;












































{/* {cartProducts.map((cp)=>{
return <div className='card'>
<div className='card-title'>
<p>id:{cp.id}</p>
</div>
<div className='card-body'>
   <p><img src={cp.image} height="120px"></img></p>
   <p>{cp.name}</p>
   <p>{cp.brand}</p>
   <p>{cp.desc}</p>
   <p>{cp.rating}</p>
   <p>Rs.{cp.price}</p>
</div>
</div>

})} */}

















{/* <select  type="text" placeholder='enter brand name' id="brand" onChange={getproducts}>
        <option> select</option>
          <option>Aurelia</option>
          <option>LG</option>
          <option>Levis</option>
          <option>ONIDA</option>
          <option>Puma</option>
          <option>Kanchipuram</option>
          <option>Teakwood</option>
          <option>SONY</option>
          <option>Nykaa</option>
          <option>MI</option>
          <option>Limeroad</option>
          <option>Teamspirit</option>
          <option>H&M</option>
          <option>SAMSUNG</option>
        </select> */}