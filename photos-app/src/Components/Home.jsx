import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albumData) => {
        setLoading(false);
        setAlbums(albumData);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="heading">Photos App</h1>
      <ListGroup>
        {loading ? (
          <div className="spinner">
            <Spinner color="success">Loading...</Spinner>
          </div>
        ) : (
          albums.map((eachAlbum) => (
            <ListGroupItem
              key={eachAlbum.id}
              action
              className="text-center mb-2"
            >
              <Link to={`/album/${eachAlbum.id}`} className="album-link">
                {eachAlbum.title}
              </Link>
            </ListGroupItem>
          ))
        )}
      </ListGroup>
    </>
  );
};

export default Home;
