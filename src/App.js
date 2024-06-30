import React from 'react';
import Header_gallery from './components/Header_gallery';
import Gallery from './components/Gallery';
import Footer_gallery from './components/Footer_gallery';
import './components/styles2.css';


function App() {
    return (
        <div className="App">
            <Header_gallery />
            <Gallery />
            <Footer_gallery />
        </div>
    );
}

export default App;
