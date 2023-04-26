import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function RatingBar({ rating }) {
  return (
    <div className='absolute right-2 top-2 w-10'>
      <CircularProgressbar
        value={rating / 100}
        maxValue={1}
        text={`${rating}%`}
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
