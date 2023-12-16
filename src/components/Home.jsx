//Home.js
import React from 'react';

const Home = ({ count, incrementCount }) => {
    return (
        <div>
            <h2>Home</h2>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
};

export default Home;