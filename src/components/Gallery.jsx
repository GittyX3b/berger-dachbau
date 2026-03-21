import { MoveLeft, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";

import image1 from "@assets/images/Berger-Dachbau_Referenz_001.jpg";
import image2 from "@assets/images/Berger-Dachbau_Referenz_002.jpg";
import image3 from "@assets/images/Berger-Dachbau_Referenz_003.jpg";
import image4 from "@assets/images/Berger-Dachbau_Referenz_004.jpg";
import image5 from "@assets/images/Berger-Dachbau_Referenz_005.jpg";
import image6 from "@assets/images/Berger-Dachbau_Referenz_006.jpg";
import image7 from "@assets/images/Berger-Dachbau_Referenz_007.jpg";
import image8 from "@assets/images/Berger-Dachbau_Referenz_008.jpg";
import image9 from "@assets/images/Berger-Dachbau_Referenz_009.jpg";
import image10 from "@assets/images/Berger-Dachbau_Referenz_010.jpg";
import image11 from "@assets/images/Berger-Dachbau_Referenz_011.jpg";
import image12 from "@assets/images/Berger-Dachbau_Referenz_012.jpg";
import image13 from "@assets/images/Berger-Dachbau_Referenz_013.jpg";
import image14 from "@assets/images/Berger-Dachbau_Referenz_014.jpg";
import image15 from "@assets/images/Berger-Dachbau_Referenz_015.jpg";
import image16 from "@assets/images/Berger-Dachbau_Referenz_016.jpg";
import image17 from "@assets/images/Berger-Dachbau_Referenz_017.jpg";
import image18 from "@assets/images/Berger-Dachbau_Referenz_018.jpg";

export const Gallery = () => {
  const [_index, setIndex] = useState(1);
  const total = 18;

  useEffect(() => {
    const carousel = document.getElementById("slide1")?.parentElement;
    carousel?.scrollTo({
      left: ((_index - 1) * carousel.offsetWidth) / 2,
      behavior: "smooth",
    });
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
          <img src={image1} className="w-fit" />
        </div>
        <div id="slide2" className="carousel-item relative w-full md:w-1/2">
          <img src={image2} className="w-fit" />
        </div>
        <div id="slide3" className="carousel-item relative w-full md:w-1/2">
          <img src={image3} className="w-fit" />
        </div>
        <div id="slide4" className="carousel-item relative w-full md:w-1/2">
          <img src={image4} className="w-fit" />
        </div>
        <div id="slide5" className="carousel-item relative w-full md:w-1/2">
          <img src={image5} className="w-fit" />
        </div>
        <div id="slide6" className="carousel-item relative w-full md:w-1/2">
          <img src={image6} className="w-fit" />
        </div>
        <div id="slide7" className="carousel-item relative w-full md:w-1/2">
          <img src={image7} className="w-fit" />
        </div>
        <div id="slide8" className="carousel-item relative w-full md:w-1/2">
          <img src={image8} className="w-fit" />
        </div>
        <div id="slide9" className="carousel-item relative w-full md:w-1/2">
          <img src={image9} className="w-fit" />
        </div>
        <div id="slide10" className="carousel-item relative w-full md:w-1/2">
          <img src={image10} className="w-fit" />
        </div>
        <div id="slide11" className="carousel-item relative w-full md:w-1/2">
          <img src={image11} className="w-fit" />
        </div>
        <div id="slide12" className="carousel-item relative w-full md:w-1/2">
          <img src={image12} className="w-fit" />
        </div>
        <div id="slide13" className="carousel-item relative w-full md:w-1/2">
          <img src={image13} className="w-fit" />
        </div>
        <div id="slide14" className="carousel-item relative w-full md:w-1/2">
          <img src={image14} className="w-fit" />
        </div>
        <div id="slide15" className="carousel-item relative w-full md:w-1/2">
          <img src={image15} className="w-fit" />
        </div>
        <div id="slide16" className="carousel-item relative w-full md:w-1/2">
          <img src={image16} className="w-fit" />
        </div>
        <div id="slide17" className="carousel-item relative w-full md:w-1/2">
          <img src={image17} className="w-fit" />
        </div>
        <div id="slide18" className="carousel-item relative w-full md:w-1/2">
          <img src={image18} className="w-fit" />
        </div>
      </div>
    </section>
  );
};
