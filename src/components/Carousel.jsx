import MovieCard from "./ui/MovieCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";

/**
 *
 * Displays a carousel of movies from an array
 */

const Carousel = ({ data }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
    1440: { items: 5 },
    3000: { items: 5 },
  };

  return (
    <div data-testid="movie-carousel">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        infinite={true}
        disableDotsControls={true}
        controlsStrategy="responsive"
        items={data.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      />
    </div>
  );
};

export default Carousel;
