import React, { useState } from 'react';

const CatculateContainer = () => {
    const [containsGrains, setContainsGrains] = useState(null);
    const [numericValue, setNumericValue] = useState('');

    const handleOptionChange = (option) => {
        setContainsGrains(option);
    };

    const handleNumericChange = (event) => {
        setNumericValue(event.target.value);
    };

    return (
        <div className="catculate-container">
            <h2>Czy zawiera zboża?</h2>
            <div className="option">
                <input
                    type="radio"
                    id="yes"
                    name="containsGrains"
                    value="yes"
                    checked={containsGrains === 'yes'}
                    onChange={() => handleOptionChange('yes')}
                />
                <label htmlFor="yes">Tak</label>
            </div>
            <div className="option">
                <input
                    type="radio"
                    id="no"
                    name="containsGrains"
                    value="no"
                    checked={containsGrains === 'no'}
                    onChange={() => handleOptionChange('no')}
                />
                <label htmlFor="no">Nie</label>
            </div>
            <div className="numeric-input">
                <input
                    type="number"
                    value={numericValue}
                    placeholder="Białko"
                    onChange={handleNumericChange}
                />
            </div>
            <div className="numeric-input">
                <input
                    type="number"
                    value={numericValue}
                    placeholder="Tłuszcze"
                    onChange={handleNumericChange}
                />
            </div>
            <div className="numeric-input">
                <input
                    type="number"
                    value={numericValue}
                    placeholder="Tauryna"
                    onChange={handleNumericChange}
                />
            </div>
            <div className="numeric-input">
                <input
                    type="number"
                    value={numericValue}
                    placeholder="Woda"
                    onChange={handleNumericChange}
                />
            </div>
        </div>
    );
};


export default function Catculate() {
    return (
        <div>
            <h1>Catculate Page</h1>
            <CatculateContainer />
        </div>
    );
}