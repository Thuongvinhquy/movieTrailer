import { createContext, useState } from "react";
import PropType from "prop-types";
import Modal from "react-modal";
import YouTube from "react-youtube";

// setup youtube
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  // Sử dụng useState để sử dụng modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // tạo 1 cái trailer phim
  const [trailerKey, setTrailerKey] = useState("");

  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US `;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerKey(data.results[0].key);
      setModalIsOpen(true);
    } catch (error) {
      setModalIsOpen(false);
      console.log(error);
    }
  };
  return (
    <MovieContext.Provider value={{ handleTrailer }}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        {/* bỏ youtube vào trong  cái modal, chỉ cần xóa rồi ctrl lại thì nó sẽ nhận kết quả mình truyền vào */}
        <YouTube videoId={trailerKey} opts={opts} />;
      </Modal>
    </MovieContext.Provider>
  );
};
MovieProvider.propTypes = {
  children: PropType.node,
};
export { MovieProvider, MovieContext };
