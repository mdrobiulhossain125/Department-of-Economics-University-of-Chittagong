/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { FacultyPage } from './pages/FacultyPage';
import { ResearchPage } from './pages/ResearchPage';
import { ClubsPage } from './pages/ClubsPage';
import { GalleryPage } from './pages/GalleryPage';
import { CalendarPage } from './pages/CalendarPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Sync state with URL hash for clean client-side routing on Netlify
  const [activeTab, setActiveTabState] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validTabs = ['home', 'about', 'academics', 'faculty', 'research', 'clubs', 'gallery', 'calendar', 'contact'];
    return validTabs.includes(hash) ? hash : 'home';
  });

  const setActiveTab = (tab: string) => {
    setActiveTabState(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validTabs = ['home', 'about', 'academics', 'faculty', 'research', 'clubs', 'gallery', 'calendar', 'contact'];
      if (validTabs.includes(hash)) {
        setActiveTabState(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'about':
        return <AboutPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'faculty':
        return <FacultyPage />;
      case 'research':
        return <ResearchPage />;
      case 'clubs':
        return <ClubsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
        {/* Navigation Bar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Page Content */}
        <main className="flex-1">
          {renderCurrentPage()}
        </main>

        {/* Global Academic Footer */}
        <Footer setActiveTab={setActiveTab} />
      </div>
    </LanguageProvider>
  );
}
