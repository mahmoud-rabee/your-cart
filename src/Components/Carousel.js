import "./Carousel.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Carousel() {
  return (
    <div className="cparent">
      <OwlCarousel
        className="owl-theme container"
        loop
        autoplay
        margin={10}
        items={1}
      >
        <div className="item">
          <h1>
            <span>Sale 20% Off </span>
            On Everything
          </h1>
          <p>
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
        </div>
        <div className="item">
          <h1>
            <span>Sale 20% Off </span>
            On Everything
          </h1>
          <p>
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Carousel;
