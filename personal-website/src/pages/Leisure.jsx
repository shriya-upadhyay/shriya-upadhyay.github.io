import './Leisure.css';
// import SpotifyTopTracks from '../components/SpotifyTopTracks';
import React, { useState } from 'react';
import shriya_tennis from '../assets/shriya_tennis.jpg';
import shriya_tennis2 from '../assets/shriya_tennis2.jpg';
import shriya_tennis3 from '../assets/shriya_tennis3.jpg';
import foodpic1 from '../assets/foodpic1.jpg';
import foodpic2 from '../assets/foodpic2.png';
import foodpic3 from '../assets/foodpic3.png';

function Leisure() {

    return  (
        <div className="Leisure">
        <h1 id="title">Leisure</h1>
        <div className="Activities" style={{marginTop: '5%'}}>
            <div className="Activity">
                <h2 className="activity_title">Tennis</h2>
                <div className="content">
                    <p>
                        I&apos;ve been playing tennis since I was 11 years old and played competitively throughout my high school years. 
                        I played both singles and doubles but have always appreciated playing doubles slightly more than singles, especially with my twin sister.
                        We were ranked all-state in my junior year of high school. I don&apos;t play competitively anymore, but I still enjoy spending a few morning or weekend hours hitting the ball around.
                    </p>
                    <img className="tennisimages" src={shriya_tennis} alt="Description of image" />
                    <img className="tennisimages" src={shriya_tennis2} alt="Description of image" />
                    <img className="tennisimages" src={shriya_tennis3} alt="Description of image" />

                </div>
            </div>

            <div className="Activity">
                <h2 className="activity_title">Music</h2>
                <div className="content">
                    <p>
                        In my free time, I love creating playlists filled with music that represent all of my fickle moods. 
                        My favorite genre is indie/alternative rock, but I find myself engrossed in pop, country, and bollywood music sometimes as well. Check out my On Repeat playlist below to see what I&apos;ve been listening to lately!
                        
                    </p>

                    <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1Epqgu9PGrCY89?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>                    {/* Add an image here if you have one */}
                </div>
            </div>

            <div className="Activity">
                <h2 className="activity_title">Food</h2>
                <div className="content">
                    <p>
                        This title is a bit vague because I couldn&apos;t really find the right word to describe my love for food. I love trying new cuisines, cooking, and baking. See below for some of my favorites!
                    </p>
                    <img className="foodimages" src={foodpic1} alt="Description of image" />
                    <img className="foodimages" src={foodpic2} alt="Description of image"  />
                    <img className="foodimages" src={foodpic3} alt="Description of image" />

                </div>
            </div>
        </div>

        </div>
    );
}

export default Leisure;