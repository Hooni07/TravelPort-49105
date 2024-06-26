import { useEffect, useState } from 'react';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';

type ReviewStarProps = {
  onChange: (selectedScore: number) => void;
  initialScore?: number;
};
const ReviewStar = ({ onChange, initialScore = 0 }: ReviewStarProps) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const array = [0, 1, 2, 3, 4];

  useEffect(() => {
    const initialClickStates = array.map((_, idx) => idx < initialScore);
    setClicked(initialClickStates);
  }, [initialScore]);

  const handleStarClick = (index: number) => {
    const clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    const score = clicked.filter(
      (clickedBoolean) => clickedBoolean === true,
    ).length;
    onChange(score);
  }, [clicked, onChange]);

  return (
    <div className="flex gap-4 cursor-pointer">
      {array.map((el) =>
        clicked[el] ? (
          <ImStarFull
            key={el}
            size={35}
            color="#3065e8"
            onClick={() => handleStarClick(el)}
          />
        ) : (
          <ImStarEmpty
            key={el}
            onClick={() => handleStarClick(el)}
            size={35}
            color="#3065e8"
          />
        ),
      )}
    </div>
  );
};

export default ReviewStar;
