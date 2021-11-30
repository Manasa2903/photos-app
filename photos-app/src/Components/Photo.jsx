import { Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";
import ImagePreview from "./ImagePreview";
import { useState } from "react";

const Photo = ({ albumData }) => {
  const { thumbnailUrl, title, url } = albumData;
  const [open, setOpen] = useState(false);

  const setToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Col xs="12" sm="6" lg="3" xl="2">
        <Card className="cards">
          <CardImg
            alt="Card image cap"
            src={thumbnailUrl}
            top
            width="100%"
            className="thumbnail-image"
            onClick={() => setToggle()}
          />
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
          </CardBody>
        </Card>
        {open && <ImagePreview url={url} open={open} setToggle={setToggle} />}
      </Col>
    </>
  );
};

export default Photo;
