import { Formik } from "formik";
import { FcSearch } from "react-icons/fc";
import { Header, SearchForm, ButtonForm, InputForm } from "./SearchBar.styled";
import toast from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    if (values.search.trim() === "") {
      toast("Add valid text!", {
        icon: "☝️",
        style: {
          margin: "70px",
          borderRadius: "10px",
          background: "#c11919",
          color: "#fff",
        },
      });
      return;
    }

    onSearch(values.search);
    actions.resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <SearchForm>
          <ButtonForm type="submit">
            <FcSearch size="26px" />
          </ButtonForm>
          <InputForm
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
}
