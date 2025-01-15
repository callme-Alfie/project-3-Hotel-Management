import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import About from './Components/About/About';
import FooterHome from './Components/Contents/FooterHome/FooterHome';
import Room from './Components/Rooms/Room';
import Services from './Components/Services/Services';
import ContactPage from './Components/Contact/Contact';
import BookingForm from './Components/Contents/Booking/BookingForm';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Checkout from './Components/Contents/Booking/CheckoutPage';

function App() {
  const location = useLocation(); // Access current route path

  return (
    <>
      {/* Conditionally render Navbar unless on /login, /signup, or /dashboard */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/dashboard' && <Navbar />}

      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<Room />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {/* Conditionally render Footer */}
      {location.pathname === '/' && <FooterHome />}
    </>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
