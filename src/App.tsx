// import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card";
import "./assets/css/custom.scss";
import backDesktop from "./assets/icons/pattern-background-desktop.svg";
import backMobile from "./assets/icons/pattern-background-mobile.svg";

function App() {
  const divStyle = {
    backgroundImage: `url(${backDesktop})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="container-fluid div-size" style={divStyle}>
      <div className="row centered">
        <div className="col">
          <Card />
        </div>
      </div>
      <div className="fixed-bottom text-center">
        Order Summary You can now listen to millions of songs, audiobooks, and
        podcasts on any device anywhere you like! Annual Plan $59.99/year Change
        Proceed to Payment Cancel Order
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.frontendmentor.io/profile/KceSecK">Kceseck</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
