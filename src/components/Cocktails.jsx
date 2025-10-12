import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Cocktails = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const startValue = isMobile ? "top top" : "top 30%";
  const endValue = isMobile ? "bottom bottom" : "bottom 80%";

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: startValue,
        end: endValue,
        scrub: true,
        //markers: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from(
        "#c-right-leaf",
        {
          x: 100,
          y: 100,
        },
        // The leaves are animated at the same time on mobile
        isMobile ? "<" : null
      );
  });

  return (
    <section id="cocktails" className="noisy">
      <img
        src="/public/images/cocktail-left-leaf.png"
        alt="bottom left leaf"
        id="c-left-leaf"
      />
      <img
        src="/public/images/cocktail-right-leaf.png"
        alt="bottom right leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved cocktails:</h2>

          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className="me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
