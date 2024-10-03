

import "./choice.scss";

export default function CountRounds({content, index, click}) {
    return (
      <div className="countRoudsDiv" onClick={click}>
        <input
          className="countRouds"
          type="radio"
          name="countRouds"
          value={index}
        />
        <div className="border" />
        <p>{content}</p>
      </div>
    );
}

export const SizeField = ({content, index, click}) => {
    return (
      <div className="sizeFieldDiv" onClick={click}>
        <input
          className="sizeField"
          type="radio"
          name="sizeField"
          value={index}
        />
        <div className="border" />
        <p>{content}</p>
      </div>
    );
  }

  export const PlayWithChoice = ({content, img, index, click}) => {
    return (
      <div className="playWithChoiceDiv" onClick={click}>
        <input
          className="playWithChoice"
          type="radio"
          name="playWithChoice"
          value={index}
        />
        <div className="border" />
        <p>{content}</p>
        <img src={img} alt="лого"></img>
      </div>
    );
  }

  export const SideChoice = ({content, img, index, click}) => {
    return (
      <div className="sideChoiceDiv" onClick={click}>
        <img src={img} alt="лого"></img>
        <input
          className="playWithChoice"
          type="radio"
          name="sideChoice"
          value={index}
        />
        <div className="border" />
        <p>{content}</p>
      </div>
    );
  }

  export const Results = ({points, text, img, index}) => {
    return (
      <div className="resultsDiv">
        <p className="resultsPoints">{points}</p>
        <p className="resultsText">{text}</p>
        <img src={img} alt="лого"></img>
      </div>
    )
  }