import { apiClient } from "../../lib/apiClient";
import Carousel from "../Carousel/Carousel";
import CardShimmer from "../shimmer/CardShimmer";
import "./TitleCards.css";
import { useQuery } from "@tanstack/react-query";

const TitleCards = ({ title, category }) => {
  const url = `${import.meta.env.VITE_TMDB_BASE_URL}/movie/${category || "popular"}?api_key=${import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US&page=1`;

  const { data: apidata = [], isLoading } = useQuery({
    queryKey: ["movies", category], 
    queryFn: () => apiClient({ url }),
  });
 
  if (isLoading) {
    return (
      <div className="title-cards">
        <h2>{title || "Popular on Netflix"}</h2>
        <div className="shimmer-row">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardShimmer key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="title-cards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
     <Carousel
          items={apidata?.results || []}
          renderItem={({ backdrop_path, original_title }) => (
            <div className="card">
              <img src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${backdrop_path}`
              } alt={original_title}  />
              <p>{original_title}</p>
            </div>
          )}
          isLoading
          // scrollAmount={400}
        />
    </div>
  );
};

export default TitleCards;
