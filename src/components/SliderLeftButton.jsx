export function SliderLeftButton({ previous }) {
  return (
    <button
      className='arrow absolute left-0 top-[6.9375rem] h-[190px] -translate-y-1/2 transform bg-black bg-opacity-50 focus:outline-none md:top-[8.5rem] md:h-[240px] lg:top-[9.4375rem] lg:h-[271px]'
      onClick={previous}
    >
      <svg
        className='h-full w-5 fill-transparent hover:fill-white md:w-7 lg:w-9'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z' />
      </svg>
    </button>
  );
}
