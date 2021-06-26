import React, {Component} from "react";
import { images } from "../Components/Images/index.js";
import Card from "./Card";

class Cards extends Component {

  render() {
    return (
      <>
        <div className="images">
          {images.sort(() => Math.random() - 0.5).map((element) => {
            return ( 
              <Card key={element.id} img={element}/>
            )
          })}
        </div>
      </>
    )
  }
}

export default Cards