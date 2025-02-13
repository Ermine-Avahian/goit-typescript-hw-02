import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
}

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
  if (!image) return null;
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={css.modal}>
      <div onClick={onClose} className={css.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.modalImage}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
