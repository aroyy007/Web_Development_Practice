import profilePic from './assets/profile-pic.jpg';

function Card()
{
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile-Picture" />
            <h2 className='card-title'>Spidey</h2>
            <p className='card-text'>Your Friendly Neighborhood SpiderMan</p>
        </div>
    );
}

export default Card;