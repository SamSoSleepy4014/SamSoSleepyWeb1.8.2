import { useState } from 'react';
import { NavigationSidebar } from './components/NavigationSidebar';
import { HomePage } from './components/HomePage';
import { AddonPage } from './components/AddonPage';
import { MapPage } from './components/MapPage';
import { McUiPage } from './components/McUiPage';
import backgroundImage from 'figma:asset/0e46fb7a05178e5fa1e44e845b1601b95d2f0772.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 flex min-h-screen">
        {/* Navigation Sidebar */}
        <NavigationSidebar 
          currentPage={currentPage}
          onNavigate={setCurrentPage}
        />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          {currentPage === 'Home' && <HomePage />}
          {currentPage === 'Addon' && <AddonPage />}
          {currentPage === 'Map' && <MapPage />}
          {currentPage === 'McUi' && <McUiPage />}
        </main>
      </div>
    </div>
  );
}
