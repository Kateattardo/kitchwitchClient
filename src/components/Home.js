import logo from "../images/kitchwithc_animation.mp4";

const Home = (props) => {
  // const { msgAlert, user } = props
  console.log("props in home", props);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <video src={logo} type="mp4" autoPlay muted>
        video tag not supported
      </video>
    </div>
  );
};

export default Home;
