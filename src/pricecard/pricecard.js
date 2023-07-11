import React from "react";
import "./pricecard.css";
function Pricecard({details={}}){
return(
<>
  

          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">
                {details.plan}
              </h5>
              <h6 className="card-price text-center">
                {details.price}<span className="period">/month</span>
                
              </h6>
              <hr />
              <ul className="fa-ul text-start" >
              {(details.Feautures).map((dara,i)=>(
                    <>
                        <li key={i}>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        {`✔ `}
                        {dara}
                      </li>
                    
                    </>
                
                ))}
                  {(details.LockedFeatures).map((dara,i)=>(
                    <>
                          <li className="text-muted" key={i}>
                  <span className="fa-li">
                    <i className="fas fa-times" />
                  </span>{`✖ `}
                  {dara}
                </li>
                    
                    </>
                
                ))}
                
               
             
               
             
               
              
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">
                  Button
                </a>
              </div>
            </div>
          </div>
        

</>

);

}

export default Pricecard;