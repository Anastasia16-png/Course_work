import React from 'react';
import './styles2.css';

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="image-container">
                <img src="image/image11.jpg" alt="Image 1" className="gallery-image" />
                <div className="caption">Гора Пивиха</div>
            </div>
            <div className="image-container">
                <img src="image/image22.jpg" alt="Image 2" className="gallery-image" />
                <div className="caption">Кам'янець-Подільська фортеця</div>
            </div>
            <div className="image-container">
                <img src="image/image33.jpg" alt="Image 3" className="gallery-image" />
                <div className="caption">Озеро Синевир</div>
            </div>
            <div className="image-container">
                <img src="image/image44.jpg" alt="Image 4" className="gallery-image" />
                <div className="caption">Лемурійське озеро</div>
            </div>
            <div className="image-container">
                <img src="image/image55.jpg" alt="Image 5" className="gallery-image" />
                <div className="caption">Заповідник Тустань</div>
            </div>
            <div className="image-container">
                <img src="image/image66.jpg" alt="Image 6" className="gallery-image" />
                <div className="caption">Віадук у Ворохті</div>
            </div>
            <div className="image-container">
                <img src="image/image77.jpg" alt="Image 7" className="gallery-image" />
                <div className="caption">Фортеця Тустань</div>
            </div>
            <div className="image-container">
                <img src="image/image88.jpg" alt="Image 8" className="gallery-image" />
                <div className="caption">Печера "Оптимістична"</div>
            </div>
            <div className="image-container">
                <img src="image/image99.jpg" alt="Image 9" className="gallery-image" />
                <div className="caption">Палац Шенборнів (Берегвар)</div>
            </div>
            <div className="image-container">
                <img src="image/image12.jpg" alt="Image 10" className="gallery-image" />
                <div className="caption">Бакота</div>
            </div>
            <div className="image-container">
                <img src="image/image13.jpg" alt="Image 11" className="gallery-image" />
                <div className="caption">Замок "Паланок"</div>
            </div>
            <div className="image-container">
                <img src="image/image14.jpg" alt="Image 12" className="gallery-image" />
                <div className="caption">Шарівський Палац</div>
            </div>
        </div>
    );
};

export default Gallery;