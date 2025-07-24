"use client";

export default function ImagePopup({ imageUrl, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60" style={{zIndex: 100}}>
      <div className="relative">
        <img src={imageUrl} alt="Popup" width={500} height={500} className="max-w-full max-h-screen" />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full px-3 py-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
