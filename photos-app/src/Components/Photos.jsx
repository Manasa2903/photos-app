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
            setAlbumsData(jsonData)
            setLoading(false)
        })
        .catch(e => {
            console.log(e.message)
            setLoading(false)
        })
    }, [page])
    return ( 
        <>
        <Pagination>
                <PaginationItem>
                    <PaginationLink
                    first
                    href="#"
                    onClick = {() => setPage(1)}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                    href="#"
                    previous
                    onClick = {() => page > 1 ? setPage(page-1) : setPage(1)}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={() => setPage(1)}>{page}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={() => setPage(page + 1)}>{page + 1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={() => setPage(page + 2)}>{page + 2}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={() => setPage(page + 3)}>{page + 3}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" onClick={() => setPage(page + 4)}>{page + 4}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                    href="#"
                    next
                    onClick = {() => page < 100 && setPage(page+1)}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                    href="#"
                    last
                    onClick = {() => setPage(100)}
                    />
                </PaginationItem>
                
            </Pagination>
            <Container fluid>
                <Row>
            
        {
            loading? <Spinner
            color="success"
            type="grow"
          >
            Loading...
          </Spinner> :
          
            albumsData.map(eachAlbum => <Photo key = {eachAlbum.id} albumData = {eachAlbum}/>)
        }
        </Row>
        </Container>
        </>
     );
}
 
export default Photos;