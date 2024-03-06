import { Image } from "./ImageCard.styled";

export default function ImageCard({
  alt,
  smallImages,
  bigImages,
  onSelectImg,
}) {
  return (
    <>
      <Image
        alt={alt}
        src={smallImages}
        onClick={() => onSelectImg(bigImages)}
      />
    </>
  );
}

// export default function ImageCard({ alt, smallImages, bigImages }) {
//   const [showModal, setShowModal] = useState(false);
//   const toggleModal = () => setShowModal((prevShowModal) => !prevShowModal);

//   return (
//     <>
//       <Image alt={alt} src={smallImages} onClick={toggleModal} />
//       {showModal && (
//         <ImageModal
//           bigImages={bigImages}
//           isModalOpen={showModal}
//           onClose={toggleModal}
//           tags={alt}
//         />
//       )}
//     </>
//   );
// }
