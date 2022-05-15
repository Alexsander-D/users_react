import { FiSearch } from 'react-icons/fi'

function App() {
  return (
    <div className="container">
      <h1 className='tittle'>BUSCAR UM CEP</h1>
      <div className="containerInput">
        <input
          type='Text'
          placeholder='DIGITE ALGUMA COISA'
        />
        <button className='buttonSearch'>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 00000</h2>
        <span>RUA:</span>
        <span>RESP#</span>
        <span>COMPLEMENTO:</span>
        <span>RESP#:</span>
      </main>


    </div>
  );
}

export default App;
