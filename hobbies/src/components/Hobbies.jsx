import React, { Component } from 'react'

class Hobbies extends Component {
    constructor(){
        super()
        this.state = {

            partsOfMe : [
                {
                    hobbies: "Dreaming the dreams",
                    images: "./assets/dreamer.jpg",
                    description: " A poem by Arthur William Edgar O'Shaughnessy -  'We are the music-makers, And we are the dreamers of dreams, Wandering by lone sea-breakers, And sitting by desolate streams; World-losers and world-forsakers, On whom the pale moon gleams: Yet we are the movers and shakers Of the world for ever, it seems. With wonderful deathless ditties We build up the world's great cities, And out of a fabulous story We fashion an empire's glory: One man with a dream, at pleasure, Shall go forth and conquer a crown; And three with a new song's measure Can trample an empire down. We, in the ages lying In the buried past of the earth, Built Nineveh with our sighing, And Babel itself with our mirth; And o'erthrew them with prophesying To the old of the new world's worth; For each age is a dream that is dying, Or one that is coming to birth.' "
                },
                {
                    hobbies: "Vibing with the rhythm",
                    images: "./assets/Musical.png",
                    description: "Music, the oldest and most powerful form of communication we have as a species. It can move you to the dance floor, to tears or to revolution and so much more. I use it to make my time outside bareable, to shift or hold me to an emotional state and I bind ideas and stories to my favorites. Nosetalgia by Pusha T and Kendrick brings forth a cold hearted celebrity manager rapping about the talent he's used up, flipped, soldout and destroyed to get where he is today. Move to the Ocean spawns a  chthonic creature in human form beckening the lost into water during sunset. Dipping it's open mouth into the sun reflected waters and drinking both the sea water and portions of the sun. Every person that joins it allows it to drink more of the sun. Bringing the world closer to absolute darkness."
                },
                {
                    hobbies: "The Colosseum",
                    images: "./assets/entertainment.png",
                    description: "Entertainment, it kept the people of Rome from revolting for years. Escapism for the trapped: Tv, Movies, Comics, Sports, Reality Tv, Music vidoes, Video games,  Novcaine for the soul."
                }

            ]
        }
        
    }
    render() {
        let dreaming = this.state.partsOfMe[0];
        let muzac = this.state.partsOfMe[1];
        let colosseum = this.state.partsOfMe[2];
        return (
            <div className="main">
                
                <div id="dreaming" className="hobbies">
                    <div className="title"> {dreaming.hobbies} </div>
                    <div id="img1" className="images"></div>
                    <div className="description"> {dreaming.description} </div>

                </div>
                
                <div id="musical" className="hobbies">
                    <div className="title"> {muzac.hobbies} </div>
                    <div id="img2" className="images"></div>
                    <div className="description"> {muzac.description} </div>

                </div>
                
                <div id="colosseum" className="hobbies">
                    <div className="title"> {colosseum.hobbies} </div>
                    <div id="img3" className="images"></div>
                    <div className="description"> {colosseum.description} </div>

                </div>
            </div>
        )
    }
}


export default Hobbies