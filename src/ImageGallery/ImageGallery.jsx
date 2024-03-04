import ImageCard from "../ImageCard/ImageCard";
import { Item, List } from "./ImageGallery.styled";

export default function ImageGallery({ data }) {
  console.log(data);
  return (
    <List>
      {/* Набір елементів списку із зображеннями */}
      {data.map(({ id, alt_description, urls }) => (
        <Item key={id}>
          <ImageCard
            alt={alt_description}
            smallImages={urls.small}
            bigImages={urls.regular}
          />
        </Item>
      ))}
    </List>
  );
}
