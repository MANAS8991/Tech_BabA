import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import ProductSection from './components/ProductSection';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('men');

  const menSlides = [
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=80&w=1200"
  ];

  const womenSlides = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1630255733678-cf9b715596d9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1525171254930-643fc658b64e?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200"
  ];

  const kidsSlides = [
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1617464629340-d740fc98dc70?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=1200"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Tech BabA</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveSection('men')}
                className={`${activeSection === 'men' ? 'text-white' : 'text-indigo-200'} hover:text-white transition`}
              >
                MEN
              </button>
              <button 
                onClick={() => setActiveSection('women')}
                className={`${activeSection === 'women' ? 'text-white' : 'text-indigo-200'} hover:text-white transition`}
              >
                WOMEN
              </button>
              <button 
                onClick={() => setActiveSection('kids')}
                className={`${activeSection === 'kids' ? 'text-white' : 'text-indigo-200'} hover:text-white transition`}
              >
                KIDS
              </button>
              <button className="p-2 hover:bg-indigo-700 rounded-full">
                <ShoppingCart size={24} />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-indigo-700 rounded-full"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => {
                  setActiveSection('men');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-base w-full text-left hover:bg-indigo-700"
              >
                MEN
              </button>
              <button 
                onClick={() => {
                  setActiveSection('women');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-base w-full text-left hover:bg-indigo-700"
              >
                WOMEN
              </button>
              <button 
                onClick={() => {
                  setActiveSection('kids');
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-base w-full text-left hover:bg-indigo-700"
              >
                KIDS
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {/* Image Slider */}
        <div className="relative h-[400px] overflow-hidden">
          <ImageSlider 
            slides={
              activeSection === 'men' ? menSlides :
              activeSection === 'women' ? womenSlides :
              kidsSlides
            }
          />
        </div>

        {/* Products Section */}
        <ProductSection activeSection={activeSection} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;