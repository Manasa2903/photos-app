import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from "react";

const AddNewPhoto = ({ open, setOpen, albumId }) => {
  const [formData, setFormData] = useState({});

  const formSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
        options
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setOpen(!open);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFormInputs = (event) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const { title, url, thumbnailUrl } = formData;

  const isFormHasAllInputs = title && url && thumbnailUrl;

  return (
    <Modal isOpen>
      <ModalHeader
        toggle={() => {
          setOpen(!open);
        }}
      >
        Add New Photo
      </ModalHeader>
      <ModalBody>
        <form onSubmit={formSubmit}>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title..."
            name="title"
            className="form-control mb-2"
            onChange={handleFormInputs}
          />

          <label htmlFor="url" className="form-label">
            Url
          </label>
          <input
            className="form-control mb-2"
            type="url"
            id="url"
            placeholder="Enter Url..."
            name="url"
            onChange={handleFormInputs}
          />

          <label htmlFor="thumbnailUrl" className="form-label">
            ThumbnailUrl
          </label>
          <input
            className="form-control mb-3"
            type="url"
            id="thumbnailUrl"
            placeholder="Enter Thumbail Url..."
            name="thumbnailUrl"
            onChange={handleFormInputs}
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormHasAllInputs}
          >
            Save
          </button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default AddNewPhoto;
