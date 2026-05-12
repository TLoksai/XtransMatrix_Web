import React from 'react';
import TeamTheme from './components/Teamtheme';
import FoundersTeam from './components/FoundersTeam';
import OperationTeam from './components/OperationTeam';
import DataAnnotationTeam from './components/DataAnnotationTeam';
import AIOperators from './components/AIOperators';
import LuverlyTeam from './components/LuverlyTeam';
import EngineeringTeam from './components/EngineeringTeam';


const TeamsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <TeamTheme />
      <FoundersTeam />
      <OperationTeam />
      <AIOperators />
      <LuverlyTeam />
      <EngineeringTeam />
      <DataAnnotationTeam />
    </div>
  );
};

export default TeamsPage;