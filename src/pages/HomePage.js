// src/HomePage.js
import React from 'react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import NavigationBar from '../components/Navbar';
import TeamMenu from '../components/TeamMenu';
import StandingsTable from '../components/StandingsTable';
import MusicPlayer from '../components/MusicPlayer';
import './HomePage.css';

const HomePage = () => {
  const news = [
    {
      title: 'Coritiba vive realidade diferente na Série B sem vencer como visitante',
      description: 'Contra o Botafogo-SP será a última chance do Verdão encerrar jejum fora de casa ainda no turno',
      imageUrl: 'https://s2-ge.glbimg.com/eDRGskYn-0uv0lHn0A255R-hksI=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/m/5/NLoOsOR22zPQ41wdUhRg/snapinsta.app-452850283-18446255161060473-8682624645102450512-n-1080.jpg',
    },
    {
      title: 'El jugador estrella firma un nuevo contrato',
      description: 'El contrato tiene una duración de 5 años con un salario récord.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtbNttg4wI1JoyxxASMDRfXoOxoB5wG6HcQ&s'
    },
    {
      title: 'El entrenador habla sobre la próxima temporada',
      description: 'El entrenador está optimista sobre las posibilidades del equipo.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbmyoIcwKWoh9PNAKqftMwNeaL3hks095Bg&s'
    },
    {
      title: 'Los aficionados celebran la victoria',
      description: 'La ciudad está de fiesta tras la gran victoria del equipo.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUQ0jmhLlHUWnnXkhJ99sRn6e_u3R6h73sQ&s'
    },
    {
      title: 'Análisis del partido: tácticas y estrategias',
      description: 'Un análisis detallado de las tácticas usadas en el partido.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteQjboTfnfGvzLvIweUTVrJiMSGXllEYP9g&s'
    }
  ];

  return (
    <div>
      <NavigationBar />
      <Header />
      <TeamMenu />
      <div className="news-container">
        <div className="news-cards">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        <MusicPlayer /> {/* Reproductor de música */}
      </div>
      <StandingsTable /> {/* Tabla de posiciones */}
    </div>
  );
};

export default HomePage;
