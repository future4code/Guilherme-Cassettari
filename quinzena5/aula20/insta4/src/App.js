import React,{useState} from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  
  const usuario = 'pedro'

  const [ arrayMensgem, setArrayMensagem ] = useState([])
  const [ mensagem, setMensagem] = useState('')

  const mudandoStringMensaem = (e) => {
    setMensagem(`${usuario} diz:${e.target.value}`) 
  }

  const clickFunctioon = () =>{
    setArrayMensagem([...arrayMensgem, mensagem ])
    setMensagem('')
  }

  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/149'}

        />

        <Post
          nomeUsuario={'Guilherme'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}

        />

        <Post
          nomeUsuario={'Daniel'}
          fotoUsuario={'https://picsum.photos/50/48'}
          fotoPost={'https://picsum.photos/200/148'}

        />
      </MainContainer>
    );
  }
}

export default App;

/*
render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/149'}

        />

        <Post
          nomeUsuario={'Guilherme'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}

        />

        <Post
          nomeUsuario={'Daniel'}
          fotoUsuario={'https://picsum.photos/50/48'}
          fotoPost={'https://picsum.photos/200/148'}

        />
      </MainContainer>
    );
  }


*/