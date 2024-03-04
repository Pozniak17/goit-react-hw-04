import { ModalWindow } from "./ImageModal.styled";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    // це для оверлею
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export const ImageModal = ({ isModalOpen, onClose, bigImages, tags }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Gallary modal"
    >
      <ModalWindow>
        <img src={bigImages} alt={tags} />
      </ModalWindow>
    </Modal>
  );
};
