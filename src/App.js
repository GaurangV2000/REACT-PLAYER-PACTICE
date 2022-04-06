import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import useObjectURL from "use-object-url";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState("");
  const [chan, setChan] = useState("");
  const [valid, setValid] = useState(false);
  // const [burl, setBurl] = useState("");
  // const eURL = encodeURIComponent(url);

  const updateurl = () => {
    var blob = new Blob([url]);

    const uprl = URL.createObjectURL(blob);
    // const revokedu = URL.revokeObjectURL(uprl);
    // setBurl(revokedu);
    console.log(uprl);
  };

  useEffect(() => {
    if (valid) {
      updateurl();
    }
  }, [url]);

  return (
    <div className="App">
      <h1> React Video Player</h1>

      <div className="input-group mb-3  inputfieldp">
        <input
          type="url"
          className="form-control"
          value={chan}
          onChange={(e) => setChan(e.target.value)}
          placeholder="Recipient's username"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          onClick={() => {
            setUrl(chan);
            setValid(true);
            setChan("");
          }}
          id="button-addon2"
        >
          Button
        </button>
        {/* {console.log(eURL)} */}
      </div>
      {/* {console.log(burl)} */}

      {valid ? (
        <ReactPlayer
          height="500px"
          width="1000px"
          controls
          url={url}
          // onReady={() => setValid(true)}
          // onStart={() => console.log("vieo is Started")}
          // onPause={() => console.log("vieo is Paused")}
          // onEnded={() => console.log("vieo is Ended")}
          onError={() => setValid(false)}
        />
      ) : (
        <p>Your URL {url} is Invalid ! Please enter a Valid Url </p>
      )}
    </div>
  );
};

export default App;
