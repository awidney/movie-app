import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function RatingBar({ rating }) {
  const value = rating === 0 ? 'N/A' : rating / 100;

  return (
    <div className='absolute right-2 top-2 w-8 md:w-12'>
      <CircularProgressbar
        value={value}
        maxValue={1}
        text={rating === 0 ? 'NR' : `${rating}%`}
        background
        styles={buildStyles({
          textColor: '#fff',
          textSize: '32px',
          pathColor: '#887190',
          trailColor: '#fff',
          backgroundColor: '#10141E',
        })}
      />
    </div>
  );
}

export default RatingBar;
