import img from './assets/img.png';
import iconplay from './assets/iconplay.png';
import iconplaye from './assets/iconplaye.png';
import './index.css'
import './CBandas.css'
import './CDatas.css'
import './CFinal.css'
import './CIntro.css'
import './CMenu.css'
import './CMusicas.css'
import { bandas } from './ListaBandas'

function App() {
  return (
    <>
      <div className='margem'>
        <div className='pegprincipal'>

                  {/* Opções do menu */}
          <div className='containerMenu'>
            <div className='menuOpcoes'>
            <ul>
              <li>Menu</li>
              <li>Proximos shows</li>
              <li>Biografia</li>
              <li>Bandas</li>
            </ul>
            </div>
          </div>

             {/* Introdução */}
          <div className='containerIntro'>
            <div className='introNome'>
              <h1>Nome artista</h1>
            </div>
            <div className='introBio'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe minima nihil repellendus commodi est ut non, eum ad doloribus repellat perspiciatis magnam? Dicta, minus. Natus odio quasi id accusamus.
              </p>
            </div>
          </div>

              {/* Datas futuras */}
          <div className='containerDt'>
            <div className='dtDatas'>
              <div className='datasNome'>
                <h1>Proximos shows</h1>
              </div>
              <div className='datasAssunto'>
                <p>Lorem ipsum dolor, sit amet c</p>
              </div>
              <div className='listaShows'>
                <div className='showsopcoes'>
                  <h1>Show 1</h1>
                  <h1 className='showsopcoesassu'>Dia/Mês</h1>
                </div>
                <div className='showsopcoes'>
                  <h1>Show 2</h1>
                  <h1 className='showsopcoesassu'>Dia/Mês</h1>
                </div>
                <div className='showsopcoes'>
                  <h1>Show 3</h1>
                  <h1 className='showsopcoesassu'>Dia/Mês</h1>
                </div>
              </div>
            </div>
            <div className='dtFotos'>
              <div className='fotosFundo'>
                <div className='Foto'></div>
              </div>
            </div>
          </div>
 
               {/* Bandas */}
          <div className='containerBandas'>
          <div className='listaBandas'>
          {bandas.map((banda, index) => (
              <div key={index} className='banda-item'
              style={{ backgroundImage: `url(${banda.foto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div>
                <p className='banda-nome'>{banda.nome}</p>
                <p className='banda-desc'>{banda.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='introLista'>
            <div className='tituloBanda'>
            <h1>Bandas</h1>
            </div>
            <div className='TextoIntro'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit ipsum</p>
            </div>
            <div className='tituloBotão'>
            <button id="imagemBotao" class="botao-imagem">
        <img src={iconplaye} alt="Imagem do Botão" />
    </button>
    <button id="imagemBotao" class="botao-imagem">
        <img src={iconplay} alt="Imagem do Botão" />
    </button>
            </div>
          </div>
          </div>
 

              {/* Musicas */}
<div className='containerMusic'>
  <div className='listaMusic music-1'>
  <button id="imagemBotao" class="botao-imagem">
        <img src={iconplay} alt="Imagem do Botão" />
    </button>
    <div className='observacao'>
      <h2>Observação</h2>
      <h2>Observação</h2>
    </div>
  </div>
  <div className='listaMusic music-2'>
  <button id="imagemBotao" class="botao-imagem">
        <img src={iconplay} alt="Imagem do Botão" />
    </button>
    <div className='observacao'>
      <h2>Observação</h2>
      <h2>Observação</h2>
    </div>
  </div>
  <div className='listaMusic music-3'>
  <button id="imagemBotao" class="botao-imagem">
        <img src={iconplay} alt="Imagem do Botão" />
    </button>
    <div className='observacao'>
      <h2>Observação</h2>
      <h2>Observação</h2>
    </div>
  </div>
</div>



           {/* redes sociais / Contatos */}
          <div className='containerFinal'>
            <div className='logo'>
              <div className='logofoto'>
              <img src={img} className='lfoto'/>
              </div>
            </div>
            <div className='redeSocial'>
              <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Youtube</li>
              </ul>
            </div>
            <div className='Wpp'>
              <div className='wppBotao'>
                <h1>WhatsApp</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
