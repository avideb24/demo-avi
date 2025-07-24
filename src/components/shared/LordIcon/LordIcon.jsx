"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';

const LordIcon = ({ Icon }) => {
  const playerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && playerRef.current) {
      playerRef.current.play();
    }
  }, [isClient]);

  if (!isClient) return null;

  return (
    <Player
      ref={playerRef}
      icon={Icon}
      autoplay={true}
      loop={true}
    />
  );
};

export default LordIcon;
