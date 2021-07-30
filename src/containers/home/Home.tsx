import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
      console.log('location', location);
    }, [location])
  
    return (
        <div>
            Home
        </div>
    )
}

export default Home;
