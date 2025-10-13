import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 30%",
        markers: true,
      },
      ease: "power1.inOut",
    });

    timeline
      .from("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .from(
        "#f-left-leaf",
        {
          y: "50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      });

    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create("#contact", { type: "words" });

      gsap.from(titleSplit.words, {
        scrollTrigger: {
          trigger: "#contact",
          start: "top center",
        },
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      });
    });
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="footer right leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="footer left leaf"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={`${social.name} icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
