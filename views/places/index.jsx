import React from 'react';

// Default component
const App = () => {
  // Stub HTML
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is a stub HTML for now.</p>
    </div>
  );
};

// Exporting index function
export default function index() {
  return <App />;
}

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div>
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}/>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </main>
    </Def>
)
}

