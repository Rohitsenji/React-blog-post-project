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
             <h2 className="dynamicontentheading">{item.name}</h2>
             <img className="dynamiccontentimage" src={item.image} alt="err"/>
             <p >{item.text}</p>
             <button onClick={()=> navigation(-1)}
             className="Gobackbutton" >Back</button>
            </>
        )
      })
      }
    </>
  );
};

export default UsedataDynamically;
