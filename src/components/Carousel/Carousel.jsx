import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or any icon lib
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = ({ items, renderItem, scrollAmount = 200 }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const { scrollLeft } = containerRef.current;
      if (direction === "left") {
        containerRef.current.scrollBy({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
      } else {
        containerRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="nav-btn left" onClick={() => scroll("right")}>
        <ChevronLeft size={20} />
      </button>

      <div
        ref={containerRef}
        className="carousel"
      >
        {items?.map((item, i) => (
          <Link to={`/player/${item?.id}`} className="carousel-item" key={i}>
            {renderItem(item)}
          </Link>
        ))}
      </div>

      <button className="nav-btn right" onClick={() => scroll("left")}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
