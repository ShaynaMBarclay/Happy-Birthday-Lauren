import { useState } from 'react';
import './App.css'
import EnvelopeScreen from "./EnvelopeScreen";
import BirthdayScreen from "./BirthdayScreen";
import ScrollToTop from './ScrollToTop';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white">
        <ScrollToTop trigger={isOpened} />
      {!isOpened ? (
        <EnvelopeScreen onOpen={() => setIsOpened(true)} />
      ) : (
        <BirthdayScreen />
      )}
    </div>
  );
}

export default App;
