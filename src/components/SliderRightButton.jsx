export function SliderRightButton({ next }) {
  return (
    <button
      className='absolute right-0 top-[136px] hidden h-[240px] -translate-y-1/2 transform bg-black bg-opacity-50 focus:outline-none lg:block'
      onClick={next}
    >
      <svg
        className='h-full w-10 rotate-180 fill-transparent hover:fill-white'
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
