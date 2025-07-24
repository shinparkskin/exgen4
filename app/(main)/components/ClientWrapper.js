"use client";

import { useState } from 'react';
import ImagePopup from './ImagePopup';

export default function ClientWrapper({ children }) {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {children}
      {showPopup && (
        <ImagePopup
          imageUrl="/images/notice.png"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
