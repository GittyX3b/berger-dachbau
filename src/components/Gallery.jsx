import { MoveLeft, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";

export const Gallery = () => {
  const [_index, setIndex] = useState(1);
  const total = 18;

  useEffect(() => {
    window.location.href = `#slide${_index + 1}`;
  }, [_index]);

  const handleLeft = () => {
    setIndex((i) => (i <= 1 ? total - 1 : i - 1));
  };

  const handleRight = () => {
    setIndex((i) => (i >= total - 1 ? 1 : i + 1));
  };

  return (
    <section>
      <h2
        id="Gallery-Title"
        className="bg-bd-lightgray text-bd-darkgray px-4 w-full border-t-5 flex items-center justify-center"
      >
        <MoveLeft
          id="Gallery-Left"
          className="md:btn md:btn-soft"
          onClick={handleLeft}
        ></MoveLeft>
        <span className="px-4">
          <span className="hidden md:inline">Unsere </span>Referenzen
        </span>
        <MoveRight
          id="Gallery-Right"
          className="md:btn md:btn-soft"
          onClick={handleRight}
        ></MoveRight>
      </h2>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_001.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide2" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_002.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide3" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_003.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide4" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_004.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide5" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_005.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide6" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_006.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide7" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_007.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide8" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_008.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide9" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_009.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide10" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_010.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide11" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_011.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide12" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_012.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide13" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_013.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide14" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_014.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide15" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_015.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide16" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_016.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide17" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_017.jpg"
            className="w-fit"
          />
        </div>
        <div id="slide18" className="carousel-item relative w-full md:w-1/2">
          <img
            src="src/assets/images/Berger-Dachbau_Referenz_018.jpg"
            className="w-fit"
          />
        </div>
      </div>
    </section>
  );
};
