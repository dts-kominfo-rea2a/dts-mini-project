
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'
import React, { useEffect, useState } from 'react'
import tmdbIns from '../utility/tmdb'
import MovieCard from './MovieCard'
// ** Images
// import img1 from '@src/assets/images/slider/03.jpg'
// import img2 from '@src/assets/images/slider/02.jpg'
// import img3 from '@src/assets/images/slider/01.jpg'

const PopularMovies = () => {

    
    const [popular, setPopular] = useState([]) //

    const fetchPopular = async () => {
        try {
            const fetchData = await tmdbIns.get("movie/popular", 
            {params: { language: "en-US"}})
            
            setPopular(fetchData.data.results)
            
            // console.log(fetchData.data.results)
        } catch (error) {
            console.log(error)
            // setPopular([])
        }
    }

    useEffect(() => {
        fetchPopular()
    }, [])
    // console.log(popular)
    return (
        
        <Row className='match-height mb-2'>
            {popular.map((movie, i) => (
                <Col md='4' xs='12' index={i} key={i}>
                    <MovieCard movie={movie} />
                {/* <Card index={i} key={movie.id} >
                    <CardImg top src={`${BASE_IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                    <CardBody>
                        <CardTitle tag='h4'>{movie}</CardTitle>
                        <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content
                        is a little bit longer.
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <small className='text-muted'>Last updated 3 mins ago</small>
                    </CardFooter>
                </Card> */}
                </Col>
             ))}
        {/* <Col md='4' xs='12'>
            <Card>
            <CardImg top src={img2} alt='card2' />
            <CardBody>
                <CardTitle tag='h4'>Card title</CardTitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
            <CardFooter>
                <small className='text-muted'>Last updated 3 mins ago</small>
            </CardFooter>
            </Card>
        </Col>
        <Col md='4' xs='12'>
            <Card>
            <CardImg top src={img3} alt='card3' />
            <CardBody>
                <CardTitle tag='h4'>Card title</CardTitle>
                <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has
                even longer content than the first to show that equal height action.
                </CardText>
            </CardBody>
            <CardFooter>
                <small className='text-muted'>Last updated 3 mins ago</small>
            </CardFooter>
            </Card>
        </Col> */}
        </Row>
    )
}

export default PopularMovies