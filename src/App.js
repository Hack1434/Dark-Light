import React from 'react';
import './App.css';  // Assuming you have some basic styles

// Importing ThemeProvider from ThemeContext.js
import { ThemeProvider } from './ThemeContext';

// Importing Home component
import Home from './Home';

function App() {
  return (
    // Wrapping the App with ThemeProvider
    <ThemeProvider>
      <div className="App">
        {/* Rendering the Home component */}
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
