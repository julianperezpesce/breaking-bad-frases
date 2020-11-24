import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frases from './components/Frases';


const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%) ;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  margin-top: 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;


function App() {

  //State de frases
  const [frase, guardarFrase] = useState({});
 

  const consultarApi = async () => {
    
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    // const frase = api.then( resp => resp.json() );
    //Simplifico con await
    const frase = await api.json();

    // frase.then( resultado =>  console.log(resultado) )
    //Simplifico con await
    guardarFrase(frase[0]);
   
  }
  
  //useEffect cargar una frase
  useEffect( () => {
    consultarApi();  
  }, [])

  return (
    <Contenedor>
      <Frases 
        frase={frase}
      />
      <Boton
        onClick={consultarApi}
      >
        Obtener frase
      </Boton>
      </Contenedor>
  );
}

export default App
