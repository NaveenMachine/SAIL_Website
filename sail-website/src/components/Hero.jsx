// import { useEffect } from "react";

// export default function Hero() {
//   useEffect(() => {
//     // Prevent reloading the krpano script multiple times
//     if (document.getElementById("krpano-script")) {
//       return;
//     }

//     const script = document.createElement("script");
//     script.id = "krpano-script";
//     script.src = "/vtour/tour.js"; // ✅ make sure this file exists in /public/vtour/
//     script.async = true;

//     script.onload = () => {
//       if (window.embedpano) {
//         window.embedpano({
//           xml: "/vtour/tour.xml", // ✅ path to your XML file
//           target: "panoContainer",
//           html5: "only",
//           mobilescale: 1.0,
//         });
//       } else {
//         console.error("krpano script loaded, but embedpano is undefined");
//       }
//     };

//     document.body.appendChild(script);

//     return () => {
//       if (window.removepano) {
//         window.removepano("krpanoSWFObject");
//       }
//     };
//   }, []);

//   return (
//     <section className="relative w-full h-screen">
//       {/* Panorama container needs explicit height/width and position */}
//       <div
//         id="panoContainer"
//         className="absolute inset-0"
//         style={{
//           height: "100vh",   // ✅ ensures krpano has visible space
//           width: "100vw",
//           zIndex: 0,
//           overflow: "hidden",
//           backgroundColor: "black", // helps you see if it's loading
//         }}
//       ></div>

//       {/* Overlay text (optional, currently hidden) */}
//       <div className="absolute inset-0 bg-black/30 flex items-center justify-center hidden">
//         <h1 className="text-white text-5xl font-bold">Welcome to My World</h1>
//       </div>
//     </section>
//   );
// }


// src/components/Hero.jsx
// src/components/Hero.jsx

import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";

// (cardData remains the same as before)
const cardData = {
  card1: {
    title: "MIT software tool turns everyday objects into animated, eye-catching displays",
    imageUrl: "https://news.mit.edu/sites/default/files/images/202403/MIT-ElectroDiodes-01-PRESS.jpg?_gl=1*n27z2f*_ga*MTk1MjExMjMyNC4xNzI4NzcyOTUw*_ga_N73360V22P*MTcyODc3Mjk0OS4xLjEuMTcyODc3Mjk2MS4wLjAuMA..",
  },
  card2: {
    title: "MIT prof. explains how AI can (& can’t) assist w/coding: Part 1",
    imageUrl: "https://i.ytimg.com/vi/xH1aP_oD9rA/maxresdefault.jpg",
  }
};

export default function Hero() {
  const [cardPositions, setCardPositions] = useState({});

  useEffect(() => {
    // Updated bridge function to accept a 'visible' flag
    window.updateCardPosition = (cardName, x, y, visible) => {
      setCardPositions(prevPositions => ({
        ...prevPositions,
        [cardName]: { x, y, visible } // Store the visibility state
      }));
    };

    // (The rest of the useEffect hook for loading the script is the same)
    if (document.getElementById("krpano-script")) {
      return;
    }
    const script = document.createElement("script");
    script.id = "krpano-script";
    script.src = "/vtour/tour.js";
    script.async = true;
    script.onload = () => {
      if (window.embedpano) {
        window.embedpano({
          xml: "/vtour/tour.xml",
          target: "panoContainer",
          html5: "only",
          mobilescale: 1.0,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (window.removepano) {
        window.removepano("krpanoSWFObject");
      }
      delete window.updateCardPosition;
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        id="panoContainer"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      ></div>

      {/* Render the cards */}
      {Object.keys(cardData).map(cardName => (
        <InfoCard
          key={cardName}
          // Pass the entire position object, which now includes 'visible'
          positionData={cardPositions[cardName]}
          title={cardData[cardName].title}
          imageUrl={cardData[cardName].imageUrl}
        />
      ))}
    </section>
  );
}