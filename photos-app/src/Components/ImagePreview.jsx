import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ImagePreview = ({ title, url, hidePreview }) => {
  return (
    <div>
      {console.log(url)}
      <Modal size="lg" isOpen>
        <ModalHeader toggle={hidePreview}>{title}</ModalHeader>
        <ModalBody>
          <img src={url} alt={title} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={hidePreview}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ImagePreview;
