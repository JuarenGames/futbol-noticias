// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import NavigationBar from '../components/Navbar';
import TeamMenu from '../components/TeamMenu';
import StandingsTable from '../components/StandingsTable';
import './HomePage.css';

const HomePage = () => {
  const news = [
    {
      title: 'Gran victoria del equipo local',
      description: 'El equipo local ganó el partido con un marcador de 3-1.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNgf42iCejbBFeMmqTcy266feUHL7ouBTAA&s'
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
      <StandingsTable /> {/* Agregar la tabla de posiciones */}
      <div className="news-container">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
