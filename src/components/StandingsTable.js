// src/components/StandingsTable.js
import React from 'react';
import './StandingsTable.css';

// Datos de ejemplo para la tabla de posiciones
const standingsData = [
  { position: 1, team: 'Flamengo', played: 20, won: 15, drawn: 3, lost: 2, for: 45, against: 15, points: 48 },
  { position: 2, team: 'Palmeiras', played: 20, won: 14, drawn: 4, lost: 2, for: 40, against: 18, points: 46 },
  { position: 3, team: 'São Paulo', played: 20, won: 13, drawn: 5, lost: 2, for: 38, against: 20, points: 44 },
  { position: 4, team: 'Corinthians', played: 20, won: 12, drawn: 6, lost: 2, for: 35, against: 22, points: 42 },
  { position: 5, team: 'Botafogo', played: 20, won: 11, drawn: 7, lost: 2, for: 32, against: 23, points: 40 },
  { position: 5, team: 'Juventude', played: 20, won: 11, drawn: 7, lost: 2, for: 32, against: 23, points: 40 },
  { position: 5, team: 'Atletico Mineiro', played: 20, won: 11, drawn: 7, lost: 2, for: 32, against: 23, points: 40 },
  { position: 5, team: 'bragantino', played: 20, won: 11, drawn: 7, lost: 2, for: 32, against: 23, points: 40 },
  { position: 5, team: 'Criciuma', played: 20, won: 11, drawn: 7, lost: 2, for: 32, against: 23, points: 40 },
  { position: 5, team: 'Bahia', played: 20, won: 11, drawn: 7, lost: 2, for: 32, against: 23, points: 40 },
  { position: 5, team: 'Fortaleza', played: 20, won: 11, drawn: 7, lost: 2, for: 32, against: 23, points: 40 },
  // Añadir más filas según sea necesario
];

const StandingsTable = () => {
  return (
    <div className="standings-table-container">
      <h2>Tabla de Posiciones</h2>
      <table className="standings-table">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Equipo</th>
            <th>Jugados</th>
            <th>Victorias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Goles a Favor</th>
            <th>Goles en Contra</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {standingsData.map((team) => (
            <tr key={team.position}>
              <td data-label="Posición">{team.position}</td>
              <td data-label="Equipo">{team.team}</td>
              <td data-label="Jugados">{team.played}</td>
              <td data-label="Victorias">{team.won}</td>
              <td data-label="Empates">{team.drawn}</td>
              <td data-label="Derrotas">{team.lost}</td>
              <td data-label="Goles a Favor">{team.for}</td>
              <td data-label="Goles en Contra">{team.against}</td>
              <td data-label="Puntos">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
