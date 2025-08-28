'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ImagePopup from './ImagePopup';

export default function ClientWrapper({ children }) {
  const pathname = usePathname(); // 현재 URL 경로
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // 메인 페이지(/)일 때만 팝업 표시
    if (pathname === '/') {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [pathname]);

  return (
    <>
      {children}
      {showPopup && (
        <ImagePopup
          imageUrl="/images/notice.jpg"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
