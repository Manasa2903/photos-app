import { useState, useEffect } from "react"
import Photo from './Photo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Pagination, PaginationItem, PaginationLink, Row, Spinner } from "reactstrap"

const Photos = () => {

    const [page, setPage] = useState(1)
    const [albumsData, setAlbumsData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
        .then(response => response.json())
        .then(jsonData => {
            setLoading(false)
            setAlbumsData(jsonData)
            
        })
        .catch(e => {
            console.log(e.message)
            setLoading(false)
        })
    }, [page])
    return ( 
        <>
        <h1 className="heading">Photos App</h1>
        <div className="pagination">
            <Pagination>
                    <PaginationItem>
                        <PaginationLink
                        first
                        onClick = {() => setPage(1)}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                        previous
                        onClick = {() => page > 1 && setPage(page-1)}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => setPage(2)}>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => setPage(3)}>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                        next
                        onClick = {() => page < 100 && setPage(page+1)}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                        last
                        onClick = {() => setPage(100)}
                        />
                    </PaginationItem>
                    
                </Pagination>
            </div>

            <Container>
                <Row>
            
                    {
                        loading? 
                        <div className="spinner">
                            <Spinner
                                color="success"
                            >
                        
                                Loading...
                            </Spinner> 
                        </div> : albumsData.map(eachAlbum => <Photo key = {eachAlbum.id} albumData = {eachAlbum}/>)
                    }
                </Row>
        </Container>
        </>
     );
}
 
export default Photos;