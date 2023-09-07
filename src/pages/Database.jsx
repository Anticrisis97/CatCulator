
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderContainer = () => {
    const karmy = JSON.parse(localStorage.getItem('karmy')) || [];

    const [selectedQuality, setSelectedQuality] = useState('All'); // Domyślnie pokazuje wszystkie karmy

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const filterKarmy = (quality) => {
        if (quality === 'All') {
            return karmy;
        }
        return karmy.filter(karma => karma.quality === quality);
    };

    return (
        <div className="slider-container">
            <div className="buttons">
                <button onClick={() => setSelectedQuality('All')}>All</button>
                <button onClick={() => setSelectedQuality('Excellent')}>Excellent</button>
                <button onClick={() => setSelectedQuality('Good')}>Good</button>
                <button onClick={() => setSelectedQuality('Bad')}>Bad</button>
            </div>
            <Slider {...sliderSettings}>
                {filterKarmy(selectedQuality).map((karma) => (
                    <div key={karma.id}>
                        <h3 className='food-name'>{karma.name}</h3>
                        <p className='food-info'>{karma.flavor}</p>
                        <p className='food-info-with-margin-bottom food-info'>Weight: {karma.weight}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

    const karmy = [
        {id: 1, name: 'ZiwiPeak', flavor: 'Jagnięcina', weight: '85g', quality: 'Excellent'},
        {id: 2, name: 'Feringa', flavor: 'Drób z marchwią i mniszkiem', weight: '85g', quality: 'Excellent'},
        {id: 3, name: 'GranataPet DeliCatessen', flavor: 'Łosoś z owocami morza', weight: '400g', quality: 'Excellent'},
        {id: 4, name: 'zooplus Bio', flavor: 'Biokurczak z biomarchwią', weight: '400g', quality: 'Excellent'},
        {id: 5, name: 'catz finefood bio', flavor: 'No.507 Biowołowina', weight: '85g', quality: 'Excellent'},
        {id: 6, name: "Mac's", flavor: 'Drób i żurawina', weight: '200g', quality: 'Excellent'},
        {id: 7, name: 'Wild Freedom', flavor: 'Golden Valley - Królik i kurczak', weight: '200g', quality: 'Excellent'},
        {id: 8, name: 'MjAMjAM', flavor: 'Pyszne krewetki i soczysty kurczak', weight: '200g', quality: 'Excellent'},
        {id: 9, name: "Rosie's Farm", flavor: 'Indyk i kaczka', weight: '100g', quality: 'Good'},
        {id: 10, name: 'Miamor Feine Filets', flavor: 'Kurczak z pomidorami', weight: '100g', quality: 'Good'},
        {id: 11, name: 'Animonda Carny', flavor: 'Koktajl mięsny', weight: '400g', quality: 'Good'},
        {id: 12, name: 'Tigeria', flavor: 'Kurczak z marchewkowo-groszkowym purée', weight: '85g', quality: 'Good'},
        {id: 13, name: 'catz finefood Purr', flavor: 'No. 107, kangur', weight: '400g', quality: 'Good'},
        {id: 14, name: 'Terra Felis', flavor: 'Łosoś i kurczak', weight: '200g', quality: 'Good'},
        {id: 15, name: 'Applaws', flavor: 'Pierś z kurczaka z kaczką (w bulionie)', weight: '156g', quality: 'Good'},
        {id: 16, name: 'Kitekat', flavor: 'Every flavor', weight: 'All weights', quality: 'Bad'},
        {id: 17, name: 'Whiskas', flavor: 'Every flavor', weight: 'All weights', quality: 'Bad'},
        {id: 18, name: 'Almo Nature Daily Menu', flavor: 'Kurczak', weight: '400g', quality: 'Bad'},
        {id: 19, name: 'Catessy', flavor: 'Every flavor', weight: 'All weights', quality: 'Bad'},
        {id: 20, name: 'Gourmet', flavor: 'Every flavor', weight: 'All weights', quality: 'Bad'},
    ];

    localStorage.setItem('karmy', JSON.stringify(karmy));


export default function Database() {
    return (
        <div>
            <h1>Database</h1>
            <SliderContainer />
        </div>
    );
}