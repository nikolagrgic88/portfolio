import Spline from "@splinetool/react-spline";

const Astronaut = () => {
  return (
    <div className="hidden xl:block absolute bottom-0 -left-20 pointer-events-none">
      <Spline
        scene="https://prod.spline.design/5TIvE9dYLxXNq6D4/scene.splinecode"
        className="pointer-events-auto"
      />
    </div>
  );
};

export default Astronaut;
