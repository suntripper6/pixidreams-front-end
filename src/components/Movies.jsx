import { useEffect, useState } from "react";
import Client from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Movies = () => {
  let navigate = useNavigate();

  const showMovie = (movie) => {
    navigate(`${movie.id}`);
  };
  const [movieContent, setMovieContent] = useState([]);

  useEffect(() => {
    const getContent = async (req, res) => {
      const content = await Client.get(`/api/posts`);
      console.log(content);
      setMovieContent(content.data);
    };
    getContent();
  }, []);

  return (
    <div>
      <div className="pageContainer">
        <div className="body">
          <span className="pageTitle">BLOG HISTORY</span>
          <section className="contentContainer">
            {movieContent.map((movie) => {
              return (
                <div id="blogHistory">
                  <div style={{ marginRight: "20px" }}>
                    <img
                      src={movie.image}
                      alt="poster"
                      style={{ width: "14vw", minWidth: "200px" }}
                    />
                  </div>

                  <div>                                               {/* CONTAINS TITLE, SYNOPSIS & READMORE */}
                    <div style={{ backgroundColor: "#21997f", }}>
                      <span style={{ fontSize: "28px" }}>{movie.title}</span>
                    </div>

                    <div>
                      <div style={{ margin: "12px", fontSize: "20px" }}>
                        <span>{movie.synopsis}</span>
                      </div>
                    </div>

                    <div>
                      <button
                        className="moreBtn"
                        style={{ justifyContent: "right" }}
                        onClick={() => showMovie(movie)}
                      >
                        READ MORE!
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Movies;

