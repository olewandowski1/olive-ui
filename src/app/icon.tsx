import { ImageResponse } from 'next/og';

const Icon = () => {
  let fill = 'olive';

  if (process.env.NODE_ENV === 'development') {
    fill = 'green';
  }

  return new ImageResponse(
    (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='64'
        height='64'
        viewBox='0 0 24 24'
        fill='none'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M22 2 2 22' />
      </svg>
    ),
    {
      width: 64,
      height: 64,
    }
  );
};

export default Icon;
