import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

import mail from './icons/mail.png'
import location from './icons/location.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fssa24-1.fna.fbcdn.net/v/t1.6435-9/101390719_2651941004917477_7530552054851305472_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=h43xUoTQBSsAX_BXhbt&_nc_ht=scontent.fssa24-1.fna&oh=b4e4e62bf90b3fb1f1e30c095d2a1d28&oe=60B1463D" 
          nome="Guilherme Cassettari" 
          descricao="Oi, eu sou o Guilherme Cassettari. Programador Fullstack especializado em Front End, gosto do workflow de fazer o layout no figa e codar ele"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno icone={mail} desciption={'E-mail'} string={"guizaocassettari@gmail.com"} />
        <CardPequeno icone={location} desciption={'Endereço'} string={"Rua: Angelo Ricardo Zanotto 36 - Jd Iolanda || Botucatu-sp"} />
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fssa24-1.fna.fbcdn.net/v/t1.6435-9/83154070_2392262304218683_6747195022728232960_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=qb_2JMq4IaEAX9flfME&tn=5WiUy0dAm2L6Ulbg&_nc_ht=scontent.fssa24-1.fna&oh=bb879633b5c8ab9b40b1fb32125b7a74&oe=60B15385" 
          nome="Cassettari Thai" 
          descricao="Treinando esse povo lindo que me paga para apanhar!" 
        />
        
        <CardGrande 
          imagem="https://scontent.fssa24-1.fna.fbcdn.net/v/t1.6435-9/41851306_1594155760696012_6652149543951400960_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=nElLgY5GTLoAX_EYfCH&_nc_ht=scontent.fssa24-1.fna&oh=c4f0c9c94f9bfc07965fa86ea0776451&oe=60AF5B5C" 
          nome="Moto Taxi" 
          descricao="Levando todo e qualquer tipo de carga." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
