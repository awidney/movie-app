import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function RatingBar({ rating }) {
  return (
    <div className='absolute right-2 top-2 w-8 md:w-12'>
      <CircularProgressbar
        value={rating ? rating / 100 : 0}
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
