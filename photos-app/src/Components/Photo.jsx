import { Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";

const Photo = ({ albumData, showPreview }) => {
  const { thumbnailUrl, title, url } = albumData;

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
            onClick={() => {
              showPreview({ title, url });
            }}
          />
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Photo;
