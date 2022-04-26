import axios from "axios";
import { useEffect, useState } from 'react'; 

function Episodes() {
  
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
      async function fetchEpisodes(){
          const response = await axios.get("https://breakingbadapi.com/api/episodes");
          setEpisodes(response.data);
      } 
        fetchEpisodes();
  }, [])
  
  
    return ( 
        <div>
            {episodes.map((currentEpisode) => {
                return (
                    <ul>
                        <li> {currentEpisode.title}</li>
                    </ul>
                );
            })}
        </div>
     );
}

export default Episodes;