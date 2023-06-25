import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './page/Header';
import Navbar from './page/Navbar';
import Myproject from './page/MyProject';
import About from './page/About';
import Contact from './page/Contact';
import Footer from './page/Footer';


import './App.css';

function App() {
  return (
<>
    <Navbar />
    <Header />
    <Myproject />
    <About />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
