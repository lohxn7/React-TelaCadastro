import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div class="container">
  
    <div className='form'>
    <form action="">
    <h2 className='txt-cad'>CADASTRAR</h2>

    <label htmlFor="">Nome</label>
    <div className='input'>
    <input  type="text" placeholder='username'/>
    </div>
    
    <label htmlFor="">Email</label>
    <div className='input'>
    <input type="text" placeholder='example@email.com' />
    </div>

    <label htmlFor="">Senha</label>
    <div className='input'>
    <input type="password" placeholder='password' />
    </div>
    
    <div className='button'>
      <button type='submit' >Cadastrar</button>
    </div>
    
    </form>

    </div>


  </div> 
  )
}

export default App
