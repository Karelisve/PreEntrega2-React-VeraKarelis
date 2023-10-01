import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element={<ItemListContainer />}/>
          <Route path= '/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path= '/item/:itemId' element={ <ItemDetailContainer />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;