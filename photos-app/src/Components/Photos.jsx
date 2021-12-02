import { useState, useEffect } from "react";
import Photo from "./Photo";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
} from "reactstrap";
import ImagePreview from "./ImagePreview";
import AddNewPhoto from "./AddNewPhoto";

const Photos = () => {
  const [page, setPage] = useState(1);
  const [albumsData, setAlbumsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [imagePreviewDetails, setImagePreviewDetails] = useState(null);
  const [isAddPhotoClicked, setIsAddPhotoClicked] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
      .then((response) => response.json())
      .then((jsonData) => {
        setLoading(false);
        setAlbumsData(jsonData);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
      });
  }, [page]);

  const showImagePreview = (previewDetails) => {
    setOpen(true);
    setImagePreviewDetails(previewDetails);
  };

  const hideImagePreview = () => {
    setOpen(false);
    setImagePreviewDetails(null);
  };

  return (
    <>
      {open && (
        <ImagePreview
          title={imagePreviewDetails.title}
          url={imagePreviewDetails.url}
          hidePreview={hideImagePreview}
        />
      )}

      <h1 className="heading">Photos App</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsAddPhotoClicked(true);
        }}
      >
        New Photo
      </button>

      {isAddPhotoClicked && (
        <AddNewPhoto open={isAddPhotoClicked} setOpen={setIsAddPhotoClicked} />
      )}
      <div className="pagination">
        <Pagination>
          <PaginationItem>
            <PaginationLink
              first
              onClick={() => {
                setPage(1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              previous
              onClick={() => {
                page > 1 && setPage(page - 1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                setPage(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                setPage(2);
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                setPage(3);
              }}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              next
              onClick={() => {
                page < 100 && setPage(page + 1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              last
              onClick={() => {
                setPage(100);
              }}
            />
          </PaginationItem>
        </Pagination>
      </div>

      <Container>
        <Row>
          {loading ? (
            <div className="spinner">
              <Spinner color="success">Loading...</Spinner>
            </div>
          ) : (
            albumsData.map((eachAlbum) => (
              <Photo
                key={eachAlbum.id}
                albumData={eachAlbum}
                showPreview={showImagePreview}
              />
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default Photos;
