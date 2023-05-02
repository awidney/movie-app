import { useState, useEffect } from 'react';

function BurgerMenu({ isOpen, onClick }) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    const newState = !open;
    setOpen(newState);
    onClick(newState);
  };

  const lineClass =
    'w-6 h-0.5 bg-current transition-all duration-300 ease-in-out';

  return (
    <button
      className='flex flex-col items-center justify-center rounded-full pt-2 focus:outline-none lg:hidden'
      onClick={handleClick}
    >
      <span
        className={`${lineClass} ${
          open ? 'translate-y-1.5 rotate-45 transform' : ''
        }`}
      />
      <span className={`${lineClass} my-1 ${open ? 'opacity-0' : ''}`} />
      <span
        className={`${lineClass} ${
          open ? '-translate-y-1.5 -rotate-45 transform' : ''
        }`}
      />
    </button>
  );
}

export default BurgerMenu;
