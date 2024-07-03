import { Dice4, TextLeft } from "react-bootstrap-icons";

const HeroSection = () => (
  <div className="row row-cols-auto justify-content-between align-items-center">
    <div className="col">
      <div className="row align-items-center">
        <div className="col-8">
          <h1>Tv Shows</h1>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-info btn-outline-light">
            Genres
          </button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="row gx-0">
        <div className="col-6">
          <button type="button" className="btn btn-primary btn-outline-light">
            <TextLeft color="currentColor" />
          </button>
        </div>
        <div className="col-6">
          <button type="button" className="btn btn-primary btn-outline-light">
            <Dice4 color="currentColor" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
