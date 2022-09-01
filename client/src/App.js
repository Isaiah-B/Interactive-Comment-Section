import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/home";
import PageNotFound from './routes/page-not-found/page-not-found';
import Thread from './routes/thread/thread';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<Thread />}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App;
