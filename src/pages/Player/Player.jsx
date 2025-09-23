import './Player.css';
import arrow from '../../assets/back_arrow_icon.png'
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../lib/apiClient';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
 const {id} = useParams();
 const navigate = useNavigate();
let url = `${import.meta.env.VITE_TMDB_BASE_URL}/movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`;

  const {data:videoDetails} = useQuery({
    queryKey: ['videoDetails'],
    queryFn: () => apiClient({url}),
    select: (data) => data?.results?.[0] || null
  })
  return (
    <div className='player'>
      <img src={arrow} alt="back arrow" onClick={()=>navigate(-2)} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${videoDetails?.key}`} title="trailor" frameBorder="0" allowFullScreen ></iframe> 
      <div className="player-info">
        <p>{videoDetails?.published_at?.slice(0,10)}</p>
        <p>{videoDetails?.name}</p>
        <p>{videoDetails?.type}</p>
      </div>
    </div>
  )
}

export default Player