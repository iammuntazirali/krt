import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Products />
                <Stats />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
