import { useState } from 'react';
import products from './Products';
import "./Product.css";

function App() {
  // var[prod,setProd]=useState([]);
  var[getprods,setGetprods]=useState(products);
  var [count,setCount]=useState(products.length)
  var allproducts=()=>{
    setGetprods(products);
  }
  var getproducts=()=>{
          var b=document.getElementById("brand").value;
          var c=document.getElementById("category").value;
          var min=Number(document.getElementById("minprice").value);
          var max=Number(document.getElementById("maxprice").value);

             alert("Swadeepa");
       if(b!="" && c=="" && min=="" && max==""){
          setGetprods(products.filter((ele)=>{return ele.brand==b}))
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
          setGetprods(products.filter((ele)=>{return ele.brand==b && ele.category==c}))
         }
         else if(b!="" && c=="" && min!="" && max==""){
          setGetprods(products.filter((ele)=>{return ele.brand==b && ele.price>=min}))
         }
         else if(b!="" && c=="" && min=="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.brand==b && ele.price>=max}))
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
          setGetprods(products.filter((ele)=>{return ele.brand==b && ele.category==c && ele.price>=min}))
         }
         else if(b!="" && c!="" && min=="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.brand==b && ele.category==c && ele.price<=max}))
         }
         else if(b=="" && c!="" && min!="" && max!=""){
          setGetprods(products.filter((ele)=>{return  ele.category==c && ele.price>=min && ele.price<=max}))
         }
         else if(b!="" && c=="" && min!="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.brand==b  && ele.price>=min && ele.price<=max}))
         }
         else if(b!="" && c!="" && min!="" && max!=""){
          setGetprods(products.filter((ele)=>{return ele.brand==b && ele.category==c && ele.price>=min && ele.price<=max}))
         }
         else{
          setGetprods(products);
         }

        }

  return (
    <div>
      <br/>
        {/* <button onClick={allproducts}>Allproducts</button> */}
        <input type="text" placeholder='enter brand name' id="brand" onChange={getproducts}></input>
        <input type="text" placeholder='enter category' id="category"  onChange={getproducts}></input>
        <input type="text" placeholder='enter min price' id="minprice"  onChange={getproducts}></input>
        <input type="text" placeholder='enter max price' id="maxprice"  onChange={getproducts}></input>
        {/* <button onClick={getproducts}>Get products</button> */}
        <h2>{getprods.length} products found</h2>
        {/* {count} */}
        {/* <br/> */}
        {getprods.map((p)=>{return <div className='card'>
          <div className='card-title'>
          <p>id:{p.id}</p>
          </div>
          <div className='card-body'>
             <p><img src={p.image} height="120px"></img></p>
             <p>{p.name}</p>
             <p>{p.brand}</p>
             <p>{p.desc}</p>
             <p>{p.rating}</p>
             <p>Rs.{p.price}</p>
          </div>

        </div>})}
      
    </div>
  );
}

export default App;
