import React from 'react'
import '../App.css'

const Home = () => {
    return (
        <section className="home">
            <div className="content">
                <div className="name">
                    MY NAME  IS <span>OQASHA</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor  sit  amet  consectetur  adipisicing elit. Est perferendis aut voluptate laudantium labore eveniet eaque tempora excepturi quo. Alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dicta.
                </div>
                <button>DOWNLOADE CV  </button>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="./avatar.jpg" alt="Avatar img " />
                   
                </div>
            </div>
        </section>
    )
}

export default Home
