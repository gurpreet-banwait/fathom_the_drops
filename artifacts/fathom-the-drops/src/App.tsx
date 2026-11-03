import { GameProvider, useGame } from './contexts/GameContext';
import { Home } from './pages/Home';
import { LevelMap } from './pages/LevelMap';
import { Game } from './pages/Game';
import { WinScreen } from './pages/WinScreen';

function GameRouter() {
  const { screen } = useGame();
  if (screen === 'home') return <Home />;
  if (screen === 'levelMap') return <LevelMap />;
  if (screen === 'game') return <Game />;
  if (screen === 'win') return <WinScreen />;
  return <Home />;
}

function App() {
  return (
    <GameProvider>
      <GameRouter />
    </GameProvider>
  );
}

export default App;
