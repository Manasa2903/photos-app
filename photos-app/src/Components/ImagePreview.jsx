import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ImagePreview = ({ url, open, setToggle }) => {
  return (
    <div>
      {console.log(open)}
      {console.log(url)}
      <Modal backdrop={false} centered fullscreen size="lg" isOpen={open}>
        <ModalHeader toggle={setToggle}>Modal title</ModalHeader>
        <ModalBody>
          <img src={url} alt="imagePreview" />
        </ModalBody>
        <ModalFooter>
          <Button onClick={setToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ImagePreview;
