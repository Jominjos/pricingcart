
import React,{useEffect, useState} from "react"
import Pricecard from "../pricecard/pricecard";
function Pricingdetails(){



const[daeta,setData]=useState("")
useEffect(()=>{fetch("details.json")
.then((response) => response.json())
.then((json) => setData(json.pricedetails));
},[])

let data=[...daeta];



return(

    
    <section className="pricing py-5">
    <div className="container">
      <div className="row">

        {
         data.map((card,index)=>(
        <div className="col-lg-4" key={`card${index}` }>
        <Pricecard details={card} />
        
        </div>))
        }
      
       
      </div>
    </div>
  </section>

);

}

export default Pricingdetails;