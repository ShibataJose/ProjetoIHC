import "./styles/main.css";
import { useState, useEffect } from "react";

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Software from './components/Pages/Software';
import Form from './components/Pages/Form';
import Partners from './components/Pages/Partners';
import About from './components/Pages/About';

function App() {
  const [changePage, setChangePage] = useState<string>('inicio');
  const [page, setPage] = useState<JSX.Element>(<Home />);

  useEffect(() => {
    switch(changePage) {
      case 'inicio' : setPage(<Home />); break;
      case 'software' : setPage(<Software />); break;
      case 'orçamento' : setPage(<Form />); break;
      case 'clientes' : setPage(<Partners />); break;
      case 'sobre' : setPage(<About />); break;
    };
  }, [changePage]);

  return (
    <div className='w-full h-full'>
      <Navbar changePage={setChangePage} />
      <div className="ml-20">
        <Header breadCrumb={changePage} />
        <div>{page}</div>
      </div>
    </div>
  )
};

export default App