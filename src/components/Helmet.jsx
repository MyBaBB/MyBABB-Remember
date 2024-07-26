// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Your Custom Title</title>
      </Helmet>
      {/* Other content */}
    </div>
  );
};

export default App;
// npm install react-helmet

// React Helmet is a document head manager for React. Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.
