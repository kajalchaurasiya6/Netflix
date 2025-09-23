import loaderImg from '../../assets/netflix_spinner.gif';
import './Loader.css';
function Loader() {
  return (
    <div className='loader'>
        <img src={loaderImg} alt="netflix spinner" width={'150px'} height={'150px'} />
    </div>
  )
}

export default Loader;