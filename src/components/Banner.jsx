import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-2 px-3  ">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px]">Nghe nói em thích tôi</h2>
            {/* Số sao */}
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
            </div>
            <p className="text-white ">
              Bạn có thể có ác cảm với chủ đề của cuốn sách, bởi vì ban đầu nó
              có vẻ ’tôn giáo’ – mà không phải vậy. Các nguyên tắc trong cuốn
              sách này đã có từ rất lâu trước khi có bất kỳ thứ gì có thể được
              xem là một tôn giáo – theo nghĩa hiện đại – và vẫn sẽ tồn tại
              nhiều ngàn năm sau tính từ bây giờ. Ngoài ra chủ đề có thể không
              phù hợp với bạn vì đó là điều bạn cảm thấy bạn nên làm, nhưng
              không biết làm thế nào.
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 text-white bg-black font-bold text-sm">
                Chi tiết
              </button>
              <button className="p-3 text-white bg-red-600 font-bold text-sm">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            {/* lấy các icon ra */}
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out ">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
