

export default function Favorites() {
    return (
        <section>
        <div>
            <h1 className="favorites-heading--first">My Favorites</h1>
            <div className="favorites" style={{padding:50}}>
            <h2 className="favorites-heading">  
            <a   target="_blank"
                rel="noreferrer" className="nolan-link" href="https://letterboxd.com/cagrikuzaytepe/"> My Favorite director is Christopher Nolan
            
            </a>
            </h2>
            <img src="./img/Nolan.jpg"></img>
            </div>
        </div>
        <div>
            <div className="favorites" style={{padding:50}}>
            <h2 className="favorites-heading"> My Favorite music band is Rammstein.</h2>
            <img src="./img/Rammstein.jpg" ></img>
            </div>
        </div>
        <div>
            <div className="favorites" style={{padding:50}}>
            <h2 className="favorites-heading"> My Favorite sport is volleyball.</h2>
            <img src="./img/Voll.jpg" alt="This is my frined Boran!"></img>
            </div>
        </div>
        </section>
    )
}