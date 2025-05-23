import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeroPage } from "./pages/HeroPage"
import { Header } from './components/header';
import { AboutPage } from './pages/AboutPage';
import { InfoPage } from './pages/InfoPage';
import { BookingPage } from './pages/BookingPage';

const App = () => {

  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/om" element={<AboutPage />} />
      <Route path="/psykoterapi-online" element={<InfoPage />} />
      <Route path="/boka" element={<BookingPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App


