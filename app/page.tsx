import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Technologies from "./components/Technologies/Technologies";
import GetInTouch from "./components/GetInTouch/GetInTouch";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Technologies />
      <GetInTouch />
    </div>
  );
}
