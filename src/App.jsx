import './App.css'
import image from './images/avatar-jessica.jpeg'

//propriedades ou props
const App = () => {
    return(
        <body>
             <main>
        <header> 
            <img className='icon' src={image} alt="foto de perfil do usuario"/>
            <h1 className='titulo'>Jessica Randall</h1>
            <h3 className='subtitulo'>London, United Kingdom</h3>
            <h4 className='descricao'>"Front-end developer and avid reader."</h4>
        </header>

        
            <nav>
                <a className='link' href="#">GitHub</a>
                <a className='link' href="#">Frontend Mentor</a>
                <a className='link' href="#">LinkedIn</a>
                <a className='link' href="#">Twitter</a>
                <a className='link' href="#">Instagram</a>
            </nav>
        
       </main>
        </body>
      
       
    )
}

// const Cabeçalho = (props) => {
//     return(
//         <h1>{props.children}</h1>
//     )
// }
// const Subtitulo = ({texto, cor}) =>{
//     return(
//         <p style={{color:cor}}>{texto}</p>
       
//     )
// }

// const App = () => {
//     return(
//         <>
//        <Cabeçalho>
//         <p>Esse é o Cabeçalho</p>
//         </Cabeçalho>

//         <Titulo cor='blue' texto="Meu titulo" />

//         <Subtitulo cor='purple' texto='Essse é o subtitulo do meu primeiro titulo' />

//         <Titulo cor='red' texto="Esse é meu outro titulo"/>

//         <Titulo  cor='pink' texto="Esse é terceiro titulo"/>

//         </>
        
//     )
// }

export default App;