export function SliderLeftButton({ previous }) {
  return (
    <button
      className='absolute left-0 top-[151px] hidden h-[271px] -translate-y-1/2 transform bg-black bg-opacity-50 focus:outline-none lg:block'
      onClick={previous}
    >
      <svg
        className='h-full w-10 fill-transparent hover:fill-white'
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
