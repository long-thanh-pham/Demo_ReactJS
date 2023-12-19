import './App.scss';
import 'swiper/swiper-bundle.css';
import './assets/boxicons-2.1.4/css/boxicons.min.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import AppRoutes from './routerjs/AppRoutes';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
