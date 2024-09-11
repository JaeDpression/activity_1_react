// ProfileCard.js
import React from 'react';
import './App.css'; // Importing CSS for styling

const ProfileCard = ({ name, age, location }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="profile-container">
      <ProfileCard name="John Doe" age={30} location="New York" />
      <ProfileCard name="Alex Mercer" age={45} location="California" />
      <ProfileCard name="Jonathan Sakuta" age={19} location="Japan" />
    </div>
  );
};

export default App;
