import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "./utils/image-api";
import Loader from "./Loader/Loader";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Button from "./LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prevShowModal) => !prevShowModal);

  useEffect(() => {
    if (query === "") return;

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);

        const imagesData = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...imagesData]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, query]);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          data={images}
          onSelectImg={setLargeImageUrl}
          onShowModal={setShowModal}
        />
      )}
      {images.length > 0 && !isLoading && <Button onHandle={handleLoadMore} />}
      {isLoading && <Loader />}

      {showModal && (
        <ImageModal
          bigImages={largeImageUrl}
          isModalOpen={showModal}
          onClose={toggleModal}
        />
      )}

      <Toaster />
    </div>
  );
}

export default App;
