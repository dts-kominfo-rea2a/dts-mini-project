
import { Button, Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap'

// import img1 from '@src/assets/images/slider/04.jpg'
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200/'

const MovieCard = ({movie}) => {
    console.log(movie)
    return (
        <Card>
          <CardImg top src={`${BASE_IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
          <CardBody>
            <CardTitle tag='h6'>{movie.title} </CardTitle>
            <CardText>
                {movie.overview}  
            </CardText>
            <a
                className='me-1 mb-1 btn btn-primary'
                color='primary'
                href={`/movie/${  movie.id}`}
                rel='noopener noreferrer'
            >
                View
            </a>
            
          </CardBody>
        </Card>
    )
}

export default MovieCard