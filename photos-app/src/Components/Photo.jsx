import { Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";

const Photo = ({albumData}) => {

    const {thumbnailUrl, title} = albumData

    return (
        <>
            
                <Col xs="12" sm="6" lg="3" xl="2">
                    <Card>
                    <CardImg
                            alt="Card image cap"
                            src={thumbnailUrl}
                            top
                            width="100%"
                            className="thumbnail-image"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {title}
                                </CardTitle>
                            </CardBody>
                    </Card>
                </Col>

            
        </> 
    );
}
 
export default Photo;