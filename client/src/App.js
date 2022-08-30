import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./routes/home/home";
import Thread from './routes/thread/thread';

const App = () => {
  const location = useLocation();
  useEffect(() => {
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<Thread />}/>
    </Routes>
  )
}

export default App;
