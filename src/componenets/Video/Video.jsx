import React from 'react'
import { FaArrowRight, FaPlay } from 'react-icons/fa'

const Video = () => {
    return (
        <section className='video'>
            <div className="video-area">
                <div className='container-fluid'>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="video-wrap">
                                <div className="play-btn">
                                    <a className="popup-video" href="https://www.youtube.com/watch?v=KMc6DyEJp04">
                                        <FaPlay />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='thumb-content-box'>
                            <div className='thumb-content'>
                                <h3>Next Video</h3>
                                <a href="#">
                                    <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video