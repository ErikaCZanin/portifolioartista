import './index.css'
import './Menu.css'
import './CFinal.css'
import './Intro.css'
import './Cdatas.css'

function App() {

  return (
    <>
      <div className='margem'>
        <div className='pegprincipal'>

          <div className='containerMenu'>
            <div className='menuOpcoes'>
              <div className='opcoes'>
                <h1>1</h1>
              </div>
              <div className='opcoes'>
                <h1>2</h1>
              </div>
              <div className='opcoes'>
                <h1>3</h1>
              </div>
              <div className='opcoes'>
                <h1>4</h1>
              </div>
            </div>
          </div>

          <div className='containerIntro'>
            <div className='introNome'> 
            <h1>Rodrigo Lucio</h1>
            </div>
            <div className='introBio'> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe minima nihil repellendus commodi est ut non, eum ad doloribus repellat perspiciatis magnam? Dicta, minus. Natus odio quasi id accusamus.</p>
            </div>
          </div>

          
          <div className='containerDt'>
              <div className='dtDatas'>
                <div className='datasNome'>
                  <h1>Proximos shows</h1>
                </div>
                <div className='datasAssunto'>
                 <p> Lorem ipsum dolor, sit amet c</p>
                </div>
                  <div className='listaShows'> 
                  <h1>shows 1</h1>
                  <h1>shows 2</h1>
                  <h1>shows 3</h1>
                </div>
              </div>
              <div className='dtFotos'>
                <div className='fotosFundo'>
                <div className='Foto'>
                <h1>Foto/Video</h1>
                </div>
                </div>
          </div>



          </div>
          <div className='containerBandas'>
            <h1>Bandas</h1>
          </div>
          <div className='containerMusic'>
            <h1>Musicas</h1>
          </div>
          <div className='containerFinal'>
            <h1>Contato</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
