import './Leisure.css';
import React from 'react';
import SpotifyWidget from '../components/SpotifyWidget';
import shriya_tennis from '../assets/shriya_tennis.jpg';
import shriya_tennis2 from '../assets/shriya_tennis2.jpg';
import shriya_tennis3 from '../assets/shriya_tennis3.jpg';
import foodpic1 from '../assets/foodpic1.jpg';
import foodpic2 from '../assets/foodpic2.png';
import foodpic3 from '../assets/foodpic3.png';

function Leisure() {
    return (
        <div className="Leisure">
            <h1 id="title">Outside the Code</h1>
            <div className="Activities" style={{ marginTop: '5%' }}>

                <div className="Activity">
                    <h2 className="activity_title">Tennis</h2>
                    <div className="content">
                        <p>
                            I&apos;ve been playing since I was 11. Competed through high school, mostly doubles, and my twin sister and I had an all-state ranked pair. We were ranked all-state in my junior year of high school. I don&apos;t play competitively anymore, but I still enjoy spending a few morning or weekend hours hitting the ball around.
                        </p>
                        <div className="image-grid">
                            <img className="activity-img" src={shriya_tennis} alt="Shriya playing tennis" />
                            <img className="activity-img" src={shriya_tennis2} alt="Shriya playing tennis" />
                            <img className="activity-img" src={shriya_tennis3} alt="Shriya playing tennis" />
                        </div>
                    </div>
                </div>

                <div className="Activity">
                    <h2 className="activity_title">Music & Podcasts</h2>
                    <div className="content">
                        <p>
                            Chronic playlist maker. There&apos;s one for every mood and situation, and I take this very seriously. My default is indie/alternative rock, but I drift into pop, country, and Bollywood pretty regularly. I also listen to podcasts daily. Check out what I&apos;ve been listening to below:
                        </p>
                        <SpotifyWidget />
                    </div>
                </div>

                <div className="Activity">
                    <h2 className="activity_title">Food</h2>
                    <div className="content">
                        <p>
                            I cook ALMOST every day, which means I&apos;ve gotten pretty good at it by necessity. I love trying new cuisines, testing recipes, and baking when I have the patience for it. Some recent favorites below:
                        </p>
                        <div className="image-grid">
                            <img className="activity-img" src={foodpic1} alt="Food" />
                            <img className="activity-img" src={foodpic2} alt="Food" />
                            <img className="activity-img" src={foodpic3} alt="Food" />
                        </div>
                    </div>
                </div>

                <div className="Activity">
                    <h2 className="activity_title">Travel</h2>
                    <div className="content">
                        <p>
                            I plan trips the same way I plan most things: strong opinions, loose itinerary. My favorite cities are the ones you can walk through for hours. Good food, good coffee, something unexpected around every corner. Always already planning the next one.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Leisure;
