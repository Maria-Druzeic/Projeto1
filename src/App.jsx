import {useEffect, useState} from 'react'
import Header from './components/Header'
import Resultado from './components/Resultado'
import './css/global.css'
import './css/estilo.css'


function App() {

// Hooks - usestate - manipula o estado da variável

const [peso, setPeso]=useState(0);
const [altura,setAltura]=useState(0);
const [resultado,setResultado]=useState(0);
const [mostrarresultado,setMostrarResultado]=useState(false);

//FUNÇÃO CALCULAR IMC

const calcularImc=()=>{
  if(peso > 0 && altura > 0){
    const imc=peso/(altura*altura);
    setResultado(imc)
  }else{
    alert("Insira o valor válidos")
  }

}

//EFEITO COLATERAL PARA MOSTRAR O RESULTADO
useEffect(()=>{
  //condicional terminaria, se o resultado for maior que 0 mostra na tela
  resultado > 0 ? setMostrarResultado(true): setMostrarResultado(false)
  //o efeito só executa quando a variavel resultado for alterado
},[resultado])

  return (
    <section className="container">
      <div className="box">
        <Header/>
        <form>
          <div>
            <label htmlFor="altura">Altura<span>(ex: 1.80)</span></label>
            <input
              id="altura"
              type="number"
              step="0.01" //permite o uso de ponto/virgula (casa decimal)
              placeholder="Digite sua altura"
              onChange={({target})=>setAltura(parseFloat(target.value))}
            />
          </div>
          
            <div>
            <label htmlFor="peso">Peso<span>(ex: 65)</span></label>
            <input
              id="peso"
              type="number"
              step="0.01" //permite o uso de ponto/virgula (casa decimal)
              placeholder="Digite sua altura"
              onChange={({target})=>setPeso(parseFloat(target.value))}
            />
          </div>
          <button type="button" onClick={calcularImc}>Calcular</button>
        </form>
      </div>
      {mostrarresultado &&(
        //Envia o valor do resultado com 2 casas decimais via props para o componente resultado
        <Resultado resultado={resultado.toFixed(2)}/>
      )}
  

    </section>
  )
}

export default App
