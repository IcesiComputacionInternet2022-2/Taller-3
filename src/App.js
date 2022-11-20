
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import MainPage from './components/MainPage';
function App(){

  const [page, setPage] = useState(0)

  var handlePageChange = (pageNum) => {
    setPage(pageNum)
  }
    return(
    <>
     {page === 0 &&(
      <div className="App">
 
      <div className="masterPage" >
        <div className = "cardHome m-4 p-3">

        
        <div className="masterPageContent">
          <h1 class="cover-heading">Zoo suricato</h1>
          <p class="lead">Esta es la interfaz grafica de la aplicación realizada en spring
          zoo-demo</p>
          <button class="btn btn-primary btn-xl" onClick={() => handlePageChange(1)}>Iniciar</button>
                   
        </div>
        </div>
      </div>


  </div>)}
  {page !== 0 &&
      <MainPage handlePageChange={handlePageChange} page={page}></MainPage>
    }
  </>
    );
  
}


export default App;
