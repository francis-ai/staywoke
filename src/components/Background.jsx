import React, { useState, useEffect, useMemo } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

const Background = () => {
  const [bubbles, setBubbles] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Clothing icons and brand names for bubbles
  const clothingIcons = useMemo(() => ['👕', '👖', '👔', '👗', '👚', '👟', '🩳', '🧥', '🧢', '👒', '🕶', '🧦'], []);
  const brandNames = useMemo(() => ['STAYWOKE', 'URBAN', 'STREET', 'STYLE', 'COLLECTION', 'PREMIUM'], []);

  // Create a bubble with appropriate settings
  const createBubble = useCallback((id) => {
    const isIcon = Math.random() > 0.5;
    const isReverse = Math.random() > 0.7;
    const size = isMobile 
      ? Math.random() * 20 + 15 
      : Math.random() * 30 + 20;
    
    return {
      id,
      type: isIcon ? 'icon' : 'text',
      content: isIcon 
        ? clothingIcons[Math.floor(Math.random() * clothingIcons.length)]
        : brandNames[Math.floor(Math.random() * brandNames.length)],
      left: Math.random() * 100,
      size: size,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      animation: isReverse ? 'floatBubbleReverse' : 'floatBubble'
    };
  }, [brandNames, clothingIcons, isMobile]);

  useEffect(() => {
    // Create initial bubbles (fewer on mobile)
    const initialCount = isMobile ? 10 : 20;
    const initialBubbles = Array.from({ length: initialCount }, (_, i) => createBubble(i));
    setBubbles(initialBubbles);

    // Add new bubble periodically (less frequently on mobile)
    const bubbleInterval = setInterval(() => {
      setBubbles(prev => {
        if (prev.length >= (isMobile ? 15 : 30)) return prev;
        return [...prev, createBubble(prev.length)];
      });
    }, isMobile ? 1500 : 1000);

    return () => clearInterval(bubbleInterval);
  }, [createBubble, isMobile]);

  return (
    <div className="bubble-container">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className={`bubble ${bubble.type}`}
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            fontSize: bubble.type === 'icon' 
              ? `${bubble.size / 2}px` 
              : `${bubble.size / (bubble.content.length > 8 ? 5 : 4)}px`,
            animation: `${bubble.animation} ${bubble.duration}s ${bubble.delay}s infinite`,
            color: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          {bubble.content}
        </div>
      ))}
    </div>
  );
};

export default Background;