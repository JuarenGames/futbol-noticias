// src/components/TeamMenu.js
import React from 'react';
import { teams } from '../data/teams';
import './TeamMenu.css';

const TeamMenu = () => {
  return (
    <div className="team-menu">
      {teams.map((team, index) => (
        <div key={index} className="team-menu-item">
          <img src={team.logoUrl} alt={team.name} className="team-logo" />
          <span>{team.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TeamMenu;
