import { useState } from "react";
import { Image } from "./ImageCard.styled";
import { ImageModal } from "../ImageModal/ImageModal";

export default function ImageCard({ alt, smallImages, bigImages }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevShowModal) => !prevShowModal);

  return (
    <>
      <Image alt={alt} src={smallImages} onClick={toggleModal} />
      {showModal && (
        <ImageModal
          bigImages={bigImages}
          isModalOpen={showModal}
          onClose={toggleModal}
          tags={alt}
        />
      )}
    </>
  );
}
