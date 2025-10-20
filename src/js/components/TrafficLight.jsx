import React, { useState } from 'react';

const TrafficLight = () => {
    const [ color, setColor ] = useState("red");

    const cycleColor = () => {
        // Usamos la lógica de ciclo que pediste: rojo -> verde -> amarillo
        if (color === 'red') {
            setColor('green');
        } else if (color === 'green') {
            setColor('yellow');
        } else { // Si es 'yellow' (o cualquier otro, como 'purple' del sig. bonus)
            setColor('red');
        }
    };

    return (
        <div className="traffic-light-wrapper">
            <div id="trafficTop"></div>
            <div id="container">
                {/* ... (Las 3 luces siguen igual que antes) ... */}
                <div 
                    className={"light red" + (color === 'red' ? ' selected' : '')}
                    onClick={() => setColor('red')}
                ></div>
                <div 
                    className={"light yellow" + (color === 'yellow' ? ' selected' : '')}
                    onClick={() => setColor('yellow')}
                ></div>
                <div 
                    className={"light green" + (color === 'green' ? ' selected' : '')}
                    onClick={() => setColor('green')}
                ></div>
            </div>
            
            {/* 🔥 BOTÓN DEL BONUS 1 🔥 */}
            <button onClick={cycleColor} className="cycle-button">
                Alternar Color
            </button>
        </div>
    );
};

export default TrafficLight;