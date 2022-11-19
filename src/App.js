import { useState } from 'react';
import MainPane from './components/MainPane';

function App() {

  const [page, setPage] = useState(0)

  var handlePageChange = (pageNum) => {
    setPage(pageNum)
  }

  return (
    <>
    {page === 0 &&
      (<div class="masthead">
      <div class="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-8 align-self-end">
            <h1 class="text-white font-weight-bold">Zoo Canyon River</h1>
            <hr class="divider" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 mb-5">Press start to add a new animal!</p>
            <button class="btn btn-primary btn-xl" onClick={() => handlePageChange(1)}>Iniciar</button>
          </div>
        </div>
      </div>
    </div>)}
    {page !== 0 &&
      <MainPane handlePageChange={handlePageChange} page={page}></MainPane>
    }
    </>
  );
}

export default App;