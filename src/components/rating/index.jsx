import design from "./design.module.css"

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 4.5 }, (_, index) => index < rating);

  return (
    <div className={design.rating}>
      {stars.map((isFilled, index) => (
        <span key={index} className={isFilled ? 'icon filled' : 'icon'}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;


