import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Initialize GSAP animation
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // Mouse move event listener
    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      });
    };

    // Mouse enter event listener
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: 'blue',
        ease: 'power2.out',
      });
    };

    // Mouse leave event listener
    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'red',
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    cursor.addEventListener('mouseenter', handleMouseEnter);
    cursor.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cursor.removeEventListener('mouseenter', handleMouseEnter);
      cursor.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;