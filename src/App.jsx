import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// register the plugins across the entire app
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <div>App</div>;
};

export default App;
