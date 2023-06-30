import errorPage from '../../assets/error-404.png';
import './Pagenotfound.css'

function PageNotFound () {
    return (
        <div className='error-container'>
            <img className= "image" src={errorPage} alt="error-page" />
        </div>
    );

};

export default PageNotFound;