import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './home.css';

import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  Legend, ResponsiveContainer
} from 'recharts';


const games = ['Valorant', 'Fortnite', 'Genshin', 'Borderlands3', 'Cyberpunk'];

const translations = {
  en: {
    title: 'Monthly Dashboard of Popular Online Games',
    line: 'Trend Over Time: Monthly Active Players by Game',
    bar: 'Player Count Comparison for Selected Month',
    desc: 'This dashboard shows trends using synthetic data.',
    selectGame: 'Select Game:',
    selectMonth: 'Select Month:',
    gamerData:  [
  { month: 'January', Valorant: 3.2, Fortnite: 4.5, Genshin: 2.5, Borderlands3: 3.0, Cyberpunk: 4.7 },
  { month: 'February', Valorant: 3.5, Fortnite: 4.3, Genshin: 2.6, Borderlands3: 3.4, Cyberpunk: 5.0 },
  { month: 'March', Valorant: 3.8, Fortnite: 4.6, Genshin: 2.8, Borderlands3: 3.1, Cyberpunk: 5.3 },
  { month: 'April', Valorant: 4.0, Fortnite: 4.8, Genshin: 2.9, Borderlands3: 2.7, Cyberpunk: 5.0 },
  { month: 'May', Valorant: 4.3, Fortnite: 5.0, Genshin: 3.0, Borderlands3: 2.5, Cyberpunk: 4.9 },
  { month: 'June', Valorant: 4.1, Fortnite: 5.2, Genshin: 3.2, Borderlands3: 2.5, Cyberpunk: 5.1 }
]
  },
  fr: {
    title: 'Tableau Mensuel des Jeux en Ligne Populaires',
    line: 'Évolution Mensuelle du Nombre de Joueurs par Jeu',
    bar: 'Comparaison du Nombre de Joueurs pour le Mois Sélectionné',
    desc: 'Ce tableau montre les tendances avec des données synthétiques.',
    selectGame: 'Choisir le jeu :',
    selectMonth: 'Choisir le mois :',
    gamerData: [
  { month: 'Janvier', Valorant: 3.2, Fortnite: 4.5, Genshin: 2.5, Borderlands3: 3.0, Cyberpunk: 4.7 },
  { month: 'Fevrier', Valorant: 3.5, Fortnite: 4.3, Genshin: 2.6, Borderlands3: 3.4, Cyberpunk: 5.0 },
  { month: 'Mars', Valorant: 3.8, Fortnite: 4.6, Genshin: 2.8, Borderlands3: 3.1, Cyberpunk: 5.3 },
  { month: 'Avril', Valorant: 4.0, Fortnite: 4.8, Genshin: 2.9, Borderlands3: 2.7, Cyberpunk: 5.0 },
  { month: 'Mai', Valorant: 4.3, Fortnite: 5.0, Genshin: 3.0, Borderlands3: 2.5, Cyberpunk: 4.9 },
  { month: 'Juin', Valorant: 4.1, Fortnite: 5.2, Genshin: 3.2, Borderlands3: 2.5, Cyberpunk: 5.1 }
]
  }
};

function Home({ lang }) {
  const text = translations[lang];
  const [selectedGame, setSelectedGame] = useState('Valorant');
  
  const [selectedMonth, setSelectedMonth] = useState(text.gamerData[0].month);

  useEffect(() => {
  setSelectedMonth(text.gamerData[0].month);
}, [lang]);
  
  const months = text.gamerData.map(d => d.month);
  const barData = games.map(game => ({
    game,
    players: text.gamerData.find(d => d.month === selectedMonth)?.[game]
  }));

  return (
    <div className="dashboard">
      <Container style={{ padding: '2rem' }}>
        <h1>{text.title}</h1>
        <p><span style={{color:'red'}}>* </span>{text.desc}</p>

        <h2>{text.line}</h2>
        <label>{text.selectGame}
          <select
            value={selectedGame}
            onChange={e => setSelectedGame(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          >
            {games.map(g => <option key={g}>{g}</option>)}
          </select>
        </label>

        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={text.gamerData}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc"  tickFormatter={(value) => `${value}M`} />
              <Tooltip formatter={(value) => [`${value}M`, selectedGame]} />
              <Legend />
              <Line type="monotone" dataKey={selectedGame} stroke="#069b3fff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <h2>{text.bar}</h2>
        <label>{text.selectMonth}
          <select
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          >
            {months.map(m => <option key={m}>{m}</option>)}
          </select>
        </label>

        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="game" stroke="#ccc" />
              <YAxis stroke="#ccc"  tickFormatter={(value) => `${value}M`} />
              <Tooltip  formatter={(value) => [`${value}M`, 'Players']} />
              <Legend />
              <Bar dataKey="players" fill="#4dabf7"  activeBar={{ fill: '#a9eac2ff' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </div>
  );
}

export default Home;
