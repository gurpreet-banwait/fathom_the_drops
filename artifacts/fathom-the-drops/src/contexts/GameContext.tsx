import { createContext, useContext, useState, ReactNode } from 'react';

export type GameScreen = 'home' | 'levelMap' | 'game' | 'win';

interface GameContextType {
  screen: GameScreen;
  currentLevel: number;
  highestUnlocked: number;
  goHome: () => void;
  startGame: (level: number) => void;
  goToLevelMap: () => void;
  completeLevel: () => void;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<GameScreen>('home');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [highestUnlocked, setHighestUnlocked] = useState(1);

  function goHome() {
    setScreen('home');
  }

  function startGame(level: number) {
    setCurrentLevel(level);
    setScreen('game');
  }

  function goToLevelMap() {
    setScreen('levelMap');
  }

  function completeLevel() {
    if (currentLevel === 7) {
      setHighestUnlocked(7);
      setScreen('win');
    } else {
      const next = currentLevel + 1;
      setHighestUnlocked((prev) => Math.max(prev, next));
      setCurrentLevel(next);
    }
  }

  return (
    <GameContext.Provider
      value={{ screen, currentLevel, highestUnlocked, goHome, startGame, goToLevelMap, completeLevel }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside GameProvider');
  return ctx;
}
