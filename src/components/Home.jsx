import logo from "./logo.png"

function Home () {
    return (
       <section>
          <div className="box">
             <h2 className="welcome" style={{ fontSize: "3rem" }}>
                Welcome to Funflix!
             </h2>
             <p>
                Rate and comment a selection of new movies!
             </p>
             <img src={logo} className="funflix-logo" alt="logo"/>
          </div>
       </section>
    );
 }
 
 export default Home;