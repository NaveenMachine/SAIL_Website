// src/components/InfoCard.jsx

export default function InfoCard({ positionData, title, imageUrl }) {
    // Don't render at all if we have no data yet
    if (!positionData) {
      return null;
    }
  
    const { x, y, visible } = positionData;
  
    const style = {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      width: '250px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      overflow: 'hidden',
      textAlign: 'center',
      color: 'black',
      // --- Visibility and Transition ---
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none', // Make it non-clickable when hidden
      transition: 'opacity 0.3s ease-in-out',
    };
  
    return (
      <div style={style}>
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
        <h3 className="p-3 font-bold">{title}</h3>
      </div>
    );
  }