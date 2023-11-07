import { Link } from "react-router-dom";
import BeersImg from "../assets/beers.png";
import RandomBeerImg from "../assets/random-beer.png";
import NewBeerImg from "../assets/new-beer.png";


function HomePage() {
    return(
        <div className="home-page">
        <h1>Home Page</h1>
        <Link to="/beers">
            <img src={BeersImg} alt="error" />
            <br></br>All Beers<br></br>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa a at,
                in accusantium blanditiis aliquid repellat dolores labore quis cum
                enim sunt animi quo facilis illo quos quae doloribus asperiores!
            </p>
        </Link>
        <Link to="/randoom-beer">
            <img src={RandomBeerImg} alt="error" />
            <br></br>Random Beers<br></br>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa a at,
                in accusantium blanditiis aliquid repellat dolores labore quis cum
                enim sunt animi quo facilis illo quos quae doloribus asperiores!
            </p>
        </Link>
        <Link to="/new-beers">
            <img src={NewBeerImg} alt="error" />
            <br></br>New Beers<br></br>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa a at,
                in accusantium blanditiis aliquid repellat dolores labore quis cum
                enim sunt animi quo facilis illo quos quae doloribus asperiores!
            </p>
        </Link>

        </div>
    )
}

export default HomePage;
