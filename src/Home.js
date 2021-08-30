import Navbar from './components/Nav';
import CSSGrid from './components/grid';
import Footer from './components/Footer';

function Home(){
    const divStyle = {
        padding: "60px",
        margin: "2rem",
        background:"white"
        
        
      };
      return (
        <div className="App">
          <Navbar/>
          <div style={divStyle}><CSSGrid/></div>
          <Footer/>
          
          
        
          
        </div>
      );
    }
    
    export default Home;
