import { useState } from "react";
import './CSS_atv4.css';

let initialArtists = [
  {
    id: 0,
    name: "Marta Covin Andrade",
  },
  {
    id: 1,
    name: "Lamidi Olonade Fakeye",
  },
  {
    id: 2,
    name: "Louise Nevelson",
  },
];

function List2Aula4() {
  const [artists, setArtists] = useState(initialArtists);
  console.log(artists);
  return (
    <>
      <div className="atividades">
        <h1 className="atv"> List2 </h1>
        <h1>Inspiring sculptors</h1>
        <ul>
          {artists.map(artist => (
            <li key={artist.id}>
              {artist.name} {"  "}{" "}
              <button
                onClick={() => {
                  setArtists(artists.filter((a) => a.id !== artist.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List2Aula4;