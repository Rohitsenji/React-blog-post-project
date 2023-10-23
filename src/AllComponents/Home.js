import React, { useContext } from "react";
import { Store } from "../Routes/Storedata";
import { Link } from "react-router-dom";
function Home() {
  const [Received] = useContext(Store);
  // const filtered = Received.filter((item) => item.category === datatype);
  return (
    <>
      <div
        className="Homecontainer1"
        style={{ display: "flex", boxSizing: "border-box", marginTop: "5vh" }}
      >
        <div className="Homecontainer1left">
          <img
            src="https://images.indianexpress.com/2023/10/yoga-mudra.jpg?w=640"
            alt="Error"
            style={{ width: "45vw", height: "52vh", borderRadius: "10px",marginLeft:"2vw"}}
          />
        </div>
        <div className="Homecontainer1right">
          <div className="imageright">
            <img
            className="hometopimage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQJAbtA1AhEWOuYRdtALHzA9zLsy1UQsAZA&usqp=CAU"
              alt="reload"
              style={{ marginLeft: "2vw", borderRadius: "10px" }}
            />
          </div>
          <div className="imageright">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyig_u4ggsgOSOj1OrbGZTkflhZBjQ_yFe2Q&usqp=CAU"
              alt="reload"
              style={{ marginLeft: "2vw", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <div
        className="Homecontainer2"
        // style={{ display: "flex", flexDirection: "column" }}
      >
        {/* font-size: 2rem; width: 15vw; */}
        <h3 >
          The Latest
          <hr />
        </h3>
        <div
          className="latestcontainer"
          style={{ width: "80%", display: "flex", boxSizing: "border-box" }}
        >
          {/* <div className='latestimage'></div>
      <div className='latestimage'></div>
      <div className='latestimage'></div> */}
          {Received.filter((item) => item.id >= 22 && item.id <= 24).map(
            (item, index) => {
              return (
                <div key={index}>
                  <Link to={`/Details/${item.id}`}>
                    <div className="Article">
                      <img
                        className="Articleimages"
                        src={item.image}
                        alt="Not Found"
                      />
                      <div className="Articletext">
                        <p>{item.name}</p>
                        <p className="text">{item.text.slice(0, 15)}..</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div
        className="Homecontainer3"
        style={{ boxSizing: "border-box", display: "flex" }}
      >
        <div className="Latest">
          <h3 id="latesth3" style={{ fontSize: "2rem", width: "25vw" }}>
            Latest Movies
            <hr />
          </h3>
          <div className="latestarticleleft" style={{ width: "50vw" }}>
            {Received.filter((item) => item.id >= 14 && item.id <= 17).map(
              (item, index) => {
                return (
                  <div key={index}>
                    <Link to={`/Details/${item.id}`}>
                      <div
                        className="Article"
                        style={{ display: "flex", boxSizing: "border-box" }}
                      >
                        <img
                          className="Articleimages"
                          src={item.image}
                          alt="Not Found"
                          style={{ width: "20-vw", borderRadius: "10px" }}
                        />
                        <div className="Articletext">
                          <h4>{item.name}</h4>
                          <p className="text" style={{ fontSize: "1rem" }}>
                            {item.text.slice(0, 200)}..
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
            <img
              src="https://static.tnn.in/thumb/msid-104601700,width-1280,height-720,resizemode-75/104601700.jpg"
              alt="reload"
              style={{ width: "50vw", borderRadius: "10px" }}
            />
          </div>
        </div>

        <div className="latestarticleright" style={{ width: "30vw" }}>
          <div
            className="Homeadvertise"
            style={{
              width: "30vw",
              height: "80vh",
              backgroundColor: "#ddf0ec",
              marginLeft:"2vw"
            }}
          >
            <p
              style={{
                marginTop: "15vw",
                paddingTop: "2vw",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {" "}
              Advertistement
            </p>
          </div>
          <div className="Toppost" style={{ width: "30vw" }}>
            <h2>Top Post</h2>
            {Received.filter((item) => item.id >= 34 && item.id <= 37).map(
              (item, index) => {
                return (
                  <div key={index} className="toppostArticle">
                    <Link to={`/Details/${item.id}`}>
                      <div className="toparticle">
                        <img
                          className="TopArticleimg"
                          src={item.image}
                          alt="Not Found"
                          style={{
                            width: "20vw",
                            borderRadius: "10px",
                          }}
                        />
                        <div style={{ display: "flex" }}>
                          <div className="textt" style={{ margin: "2vw" }}>
                            <h6>{item.name}</h6>
                            <p>{item.text.slice(0, 60)}..</p>
                          </div>

                          <div className="number">
                            <p style={{ fontSize: "2rem" }}>{index + 1}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="LatestStories" style={{display:"flex", flexDirection:"column"}}>
        <h3 style={{ fontSize: "2rem", width: "25vw" }}>
          Latest Stories
          <hr />
        </h3>
        <div className="StoriesDiv" style={{display:"flex"}}>
          {Received.filter((item) => item.id % 15 === 0 && item.id <= 45).map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className="HomeLatest"
                 style={{
                  width:"80vw",
                  display:"flex"
                 }}
                >
                  <Link to={`/Details/${item.id}`}>
                    <div className="storiesimagecontainer">
                    <img
                      className="latestimage"
                      src={item.image}
                      alt="Error"
                      style={{ width: "20vw" }}
                    />
                    </div>
                    <div className="storiescontent">
                      <p style={{ fontSize: "1rem" }}>{item.name}</p>
                      <p style={{ fontSize: "1rem" }}>
                        {item.text.slice(0, 95)}..
                      </p>
                    </div>
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
