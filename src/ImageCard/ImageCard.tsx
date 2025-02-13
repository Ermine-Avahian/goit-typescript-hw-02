import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div onClick={onClick} className={css.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
