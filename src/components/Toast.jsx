import { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeStyles = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-600 text-black',
  };

  return (
    <div className={`fixed top-5 right-5 z-50 px-4 py-2 text-white rounded shadow-lg ${typeStyles[type]}`}>
      {message}
    </div>
  );
};

export default Toast;
