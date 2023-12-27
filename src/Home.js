// Home.js
import React from 'react';
import { useTheme } from './ThemeContext';
import Post from './Post';


function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`HomeContainer ${theme}`}>
      <button className="ToggleButton" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Post 
        title="Post 1" 
        content="This is post 1 and it contains..." 
        theme={theme} // Pass theme prop to Post component
      />
      <Post 
        title="Post 2" 
        content="This is post 2 and it contains..." 
        theme={theme} // Pass theme prop to Post component
      />
      {/* Add more posts as needed */}
    </div>
  );
}

export default Home;
