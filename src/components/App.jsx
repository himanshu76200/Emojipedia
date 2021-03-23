import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(emoji) {
    return (
        <Entry 
          key={emoji.id}
          emoji={emoji.emoji}
          name={emoji.name}
          meaning={emoji.meaning}
        />
    );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <d1 className="dictionary">
        {emojipedia.map(createEmoji)}
      </d1>
    </div>
  );
}

export default App;
