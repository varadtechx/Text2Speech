import React ,{useState} from "react";

import ai from "../../assests/ai.png";
import "./header.css";
import "./button.css";


const Header = () => {
  const [isRainbowClicked, setIsRainbowClicked] = useState(false);

  const handleRainbowClick = () => {
    if (isRainbowClicked) {
      window.speechSynthesis.cancel();
      setIsRainbowClicked(false);
    } 
    else {
      setIsRainbowClicked(true);
      const speech = new SpeechSynthesisUtterance();
      speech.text = document.querySelector("textarea").value;
      window.speechSynthesis.speak(speech);
      speech.addEventListener("end", handleSpeechEnd); // Add event listener
    }
  };

  const handleSpeechEnd = () => {
    setIsRainbowClicked(false); // Set isRainbowClicked to false when speech ends
  };
  console.log(isRainbowClicked)

  return (
    <div className="textToSpeech__header section__padding" id="home">
      <div className="textToSpeech__header-content">
        <h1 className="gradient__text">
          Ignite Your Content: Let Text2Speech Bring Words to Life!
        </h1>
        <p>
          AI-Powered Text2Speech: Craft captivating narratives with lifelike
          intonation. Unleash potential, merge innovation and imagination.
          Elevate content with futuristic speech synthesis for engaging
          experiences.
        </p>

        <div className="textToSpeech__header-content__input">
          <textarea placeholder="Enter Text to Convert" />
        </div>

        <div
          className={`rainbow-container ${isRainbowClicked ? "animate" : ""}`}
          onClick={handleRainbowClick}
          
        >
          <div className={`green ${isRainbowClicked ? "animate" : ""}`}
          onClick={handleRainbowClick}></div>
         
          <div className={`pink ${isRainbowClicked ? "animate" : ""}`}
          onClick={handleRainbowClick}></div>
          
        </div>
      </div>

      <div className="textToSpeech__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};


export default Header;
