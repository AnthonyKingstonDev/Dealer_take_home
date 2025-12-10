import { useState } from "react";
import "./index.scss";
import "./App.scss";

import Header from "./components/Header";
import Card from "./components/Card";
import { projectStrings } from "./components/cardStrings.js";
const brisbaneImg = "/bridge.jpg";

function App() {
  // starting state when page is loaded, 1 selects the second card by default
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <>
      {/* loads header component at top of page */}
      <Header />


      <div className="pageContainer">

        <div className="cardContainer">

          <Card
            id={0}
            selectedId={selectedCard}
            onSelect={setSelectedCard}
            data={{
              title: "Heading 1",
              image: brisbaneImg,
              // note strings are loaded from cardStrings folder
              body: projectStrings.shortText,
            }}
          />


          <Card
            id={1}
            selectedId={selectedCard}
            onSelect={setSelectedCard}
            data={{
              title: "Heading 2",
              image: brisbaneImg,
              body: projectStrings.shortText,
            }}
          />


          <Card
            id={2}
            selectedId={selectedCard}
            onSelect={setSelectedCard}
            data={{
              title: "Heading 3",
              image: brisbaneImg,
              body: projectStrings.LongText,
            }}
          />
        </div>

      </div>
    </>
  );
}

export default App;
