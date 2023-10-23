import React, { useContext } from "react";
import { Store } from "./Storedata";
import { useNavigate, useParams } from "react-router-dom";

const UsedataDynamically = () => {
  const id = useParams().id;
  const [Receiveddata] = useContext(Store);
  const navigation = useNavigate();

  return(
    <>
      {
      Receiveddata.filter((data) => data.id === parseInt(id))
      .map((item) => {
        return(
            <>
             <h2>{item.name}</h2>
             <img src={item.image} alt="err" style={{width:"50vw",borderRadius:"20px" }}/>
             <p>{item.text}</p>
             <button onClick={()=> navigation(-1)} style={{backgroundColor:"skyblue",width:"10vw",height:"5vw",borderRadius:"20px", fontSize:'1.2rem',color:"whitesmoke",borderColor:"transparent"}}>Back</button>
            </>
        )
      })
      }
    </>
  );
};

export default UsedataDynamically;