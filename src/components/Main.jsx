import { useEffect, useState } from "react";

function Main() {
  const [meme, setMeme] = useState({
    topText: "this is something",
    bottomText: "ohh, let's see",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  useEffect(() => {
    if (allMemes.length > 0) {
      setRandomImage();
    }
  }, [allMemes]);

  function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomImageUrl = allMemes[randomIndex].url;

    setMeme((prevMeme) => ({ ...prevMeme, imageUrl: randomImageUrl }));
  }

  function handleChange(event) {
    const name = event.currentTarget.name;
    const newValue = event.currentTarget.value;

    setMeme((prevMeme) => ({ ...prevMeme, [name]: newValue }));
  }

  return (
    <main className="main">
      <div className="form">
        <div className="form__header">
          <div className="form__group">
            <label className="form__label" htmlFor="topText">
              Top text
            </label>
            <input
              className="form__input"
              id="topText"
              type="text"
              name="topText"
              onChange={(event) => handleChange(event)}
              value={meme.topText}
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="bottomText">
              Bottom text
            </label>
            <input
              className="form__input"
              id="bottomText"
              type="text"
              name="bottomText"
              onChange={(event) => handleChange(event)}
              value={meme.bottomText}
            />
          </div>
        </div>

        <button className="button" onClick={() => setRandomImage()}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img className="meme__image" src={meme.imageUrl} alt="Meme" />
        <span className="meme__text meme__text--top">{meme.topText}</span>
        <span className="meme__text meme__text--bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

export default Main;
