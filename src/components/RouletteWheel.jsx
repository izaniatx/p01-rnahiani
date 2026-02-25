import React, { useState } from 'react';

// Puedes modificar estos datos con los premios y colores que prefieras
const defaultItems = [
  { id: 1, text: '10%', color: '#FF5733' },
  { id: 2, text: '20%', color: '#33FF57' },
  { id: 3, text: 'Nada', color: '#3357FF' },
  { id: 4, text: 'Sorpresa', color: '#FF33A8' },
  { id: 5, text: '50%', color: '#F3FF33' },
  { id: 6, text: 'Intenta de nuevo', color: '#33FFF5' },
];

export default function Roulette() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setWinner(null);

    // Damos entre 5 y 10 vueltas completas antes de parar + un ángulo aleatorio
    const extraSpins = Math.floor(Math.random() * 5 + 5) * 360;
    const randomAngle = Math.floor(Math.random() * 360);
    
    // Sumamos la rotación acumulada para que la ruleta no dé "saltos" hacia atrás
    const newRotation = rotation + extraSpins + randomAngle;
    setRotation(newRotation);

    // Calculamos quién es el ganador después de que termine la animación
    setTimeout(() => {
      setIsSpinning(false);
      
      // Ajustamos el ángulo final a un valor entre 0 y 360
      const normalizedRotation = newRotation % 360;
      
      // Al girar en el sentido del reloj, el elemento bajo la flecha (0 grados)
      // es el equivalente a ir "hacia atrás" en nuestro array de segmentos
      const winningAngle = (360 - normalizedRotation) % 360;
      
      const segmentAngle = 360 / defaultItems.length;
      const winningIndex = Math.floor(winningAngle / segmentAngle);
      
      setWinner(defaultItems[winningIndex].text);
    }, 4000); // 4000ms coincide con la duración de la transición CSS
  };

  // Preparamos el fondo de la ruleta usando conic-gradient
  const segmentAngle = 360 / defaultItems.length;
  const gradientColors = defaultItems.map((item, index) => {
    const start = index * segmentAngle;
    const end = start + segmentAngle;
    return `${item.color} ${start}deg ${end}deg`;
  }).join(', ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif', marginTop: '40px' }}>
      
      {/* Contenedor Principal de la Ruleta */}
      <div style={{ position: 'relative', width: '300px', height: '300px' }}>
        
        {/* La Flechita (Un triángulo hecho con bordes CSS) */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0',
          height: '0',
          borderLeft: '15px solid transparent',
          borderRight: '15px solid transparent',
          borderTop: '30px solid #2C3E50', // Color de la flecha
          zIndex: 10
        }}></div>
        
        {/* El Círculo Giratorio */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: `conic-gradient(${gradientColors})`,
          transform: `rotate(${rotation}deg)`,
          // transition usa una curva de bezier para que frene poco a poco de forma realista
          transition: 'transform 4s cubic-bezier(0.1, 0.7, 0.1, 1)', 
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}>
          
          {/* Textos dentro de los segmentos */}
          {defaultItems.map((item, index) => {
            // Rotamos cada texto al centro de su segmento
            const rotationAngle = index * segmentAngle + segmentAngle / 2;
            
            return (
              <div key={item.id} style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                // El punto de anclaje para la rotación es el centro exacto del círculo (150px hacia abajo)
                transformOrigin: '50% 150px',
                transform: `translateX(-50%) rotate(${rotationAngle}deg)`,
                height: '150px',
                display: 'flex',
                alignItems: 'flex-start',
                paddingTop: '20px',
                fontWeight: 'bold',
                color: '#fff',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>
                {item.text}
              </div>
            );
          })}
        </div>
      </div>

      {/* Botón de Giro */}
      <button 
        onClick={spinWheel} 
        disabled={isSpinning}
        style={{
          marginTop: '40px',
          padding: '12px 30px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: isSpinning ? 'not-allowed' : 'pointer',
          backgroundColor: isSpinning ? '#95a5a6' : '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s'
        }}
      >
        {isSpinning ? 'Girando...' : '¡Girar Ruleta!'}
      </button>

      {/* Mensaje de Resultado */}
      <div style={{ height: '40px', marginTop: '20px' }}>
        {winner && (
          <h2 style={{ color: '#2c3e50', margin: 0 }}>
            🎉 ¡Ha tocado: {winner}! 🎉
          </h2>
        )}
      </div>

    </div>
  );
}