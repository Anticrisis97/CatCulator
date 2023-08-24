import React, { useState } from 'react';

const CatculateContainer = () => {
    const [containsGrains, setContainsGrains] = useState(null);
    const [proteinValue, setProteinValue] = useState('');
    const [fatValue, setFatValue] = useState('');
    const [taurineValue, setTaurineValue] = useState('');
    const [fiberValue, setFiberValue] = useState('');

    const handleOptionChange = (option) => {
        setContainsGrains(option);
    };

    const handleNumericChange = (event, setValue) => {
        const newValue = event.target.value;
        setValue(newValue);
    };

    const CalculatePoints = () => {
        let proteinPointsValue = 0;
        let fatPointsValue = 0;
        let taurinePointsValue = 0;
        let fiberPointsValue = 0;


        if (proteinValue !== '') {
            const proteinNumber = parseFloat(proteinValue);
            if (proteinNumber < 23) {
                proteinPointsValue = 0;
            } else if (proteinNumber >= 23 && proteinNumber <= 33) {
                proteinPointsValue = 1;
            } else {
                proteinPointsValue = 2
            }
        }


        if (fatValue !== '') {
            const fatNumber = parseFloat(fatValue);
            if (fatNumber < 10) {
                fatPointsValue = 0;
            } else if (fatNumber >= 10 && fatNumber <= 30) {
                fatPointsValue = 1;
            } else {
                fatPointsValue = 2;
            }
        }

        if (taurineValue !== '') {
            const taurineNumber = parseFloat(taurineValue);
            if (taurineNumber < 180) {
                taurinePointsValue = 0;
            } else if (taurineNumber >= 180 && taurineNumber <= 200) {
                taurinePointsValue = 1;
            } else {
                taurinePointsValue = 2;
            }
        }

        if (fiberValue !== '') {
            const fiberNumber = parseFloat(fiberValue);
            if (fiberNumber < 1) {
                fiberPointsValue = 0;
            } else if (fiberNumber >= 1 && fiberNumber <= 2) {
                fiberPointsValue = 1;
            } else {
                fiberPointsValue = 2;
            }

            const totalPoints = proteinPointsValue + fatPointsValue + taurinePointsValue + fiberPointsValue;
            return totalPoints;
        }
    };

    const calculateQuality = () => {
        const totalPoints = CalculatePoints();

        if (totalPoints >= 0 && totalPoints <= 4) {
            return "Bad";
        } else if (totalPoints > 4 && totalPoints <= 7) {
            return "Good";
        } else if (totalPoints === 8) {
            return "Excellent";
        } else {
            return '';
        }
    };

    const quality = calculateQuality();

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

            {containsGrains === 'yes' && (
                <div className="warning">
                    <div>Koci organizm słabo radzi sobie z metaboliczną obróbką węglowodanów,</div>
                    <div>a zboża w dużej mierze składają się właśnie z nich. Spożywanie nadmiaru cukrów przez wąsacza
                    </div>
                    <div>to prosta droga do nadmiernego odkładania energetycznej nadwyżki w postaci tkanki tłuszczowej
                    </div>
                    <div>a stąd już krok do nadwagi, otyłości, problemów ze stawami,</div>
                    otłuszczenia wątroby czy niewydolności nerek.</div>
            )}
            <div className="numeric-input">
                <input
                    type="number"
                    value={proteinValue}
                    placeholder="Białko (g)"
                    onChange={(e) => {
                        handleNumericChange(e, setProteinValue);
                    }}
                    // minimum 33g na 100g //
                />
            </div>
            <div className="numeric-input">
                <input
                    type="number"
                    value={fatValue}
                    placeholder="Tłuszcze (g)"
                    onChange={(e) => handleNumericChange(e, setFatValue)}
                    // minimum 10-30%, czyli jakoś 10-30g //
                />
            </div>
            <div className="numeric-input">
                <input
                    type="number"
                    value={taurineValue}
                    placeholder="Tauryna (mg)"
                    onChange={(e) => handleNumericChange(e, setTaurineValue)}
                    // min 0,2% na 100g, czyli 200mg//
                />
            </div>
            <div className="numeric-input">
                <input
                    type="number"
                    value={fiberValue}
                    placeholder="Błonnik (g)"
                    onChange={(e) => handleNumericChange(e, setFiberValue)}
                    // 1-3%, czyli 1-3g //
                />

                <div className="qualityResultContainer">
                    {quality !== '' && <div className="qualityResult">{quality}</div>}
                </div>
            </div>
            </div>
    );
};
export default function Catculate() {
    return (
        <div>
            <h1>CatCulator ฅ•ω•ฅ</h1>
            <CatculateContainer />
        </div>
    );
}