import React, {Component} from "react";

class Card extends Component {
    characters = []
    
    handleClick(event){
    let character = event.target
    if (character.getAttribute("check") === "found") {
      return
    }
    if (character !== this.characters[0]) {
      this.switch(character);
      this.characters.push(character);
    } else {
      this.switch(character);
      this.characters = [];
    }
    if (this.characters.length > 2) {
      if (!this.checkName(this.characters[0], this.characters[1])) {
        this.switch(this.characters[0]);
        this.switch(this.characters[1]);
        this.characters.shift();
        this.characters.shift();
      } else {
        this.characters.shift();
        this.characters.shift();
      }
    }


    let allPictures = document.getElementsByClassName("image-back");

    if (allPictures.length < 1) {
      this.props.endGame(true);
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-back");
        reset[i].setAttribute("check", "false");
        this.characters = [];
      }
    }
  }

  checkName = (character1, character2) => {
    if (character1.getAttribute("name") === character2.getAttribute("name")) {
      character1.setAttribute("check", "found");
      character2.setAttribute("check", "found");
      return true;
    }
    return false;
  }

  switch = (target) => {
    debugger
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("image-back");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("image-back");
    }
  }

  render() {
    return (
      <>
        <div 
            className="image image-back" 
            key={this.props.img.id}
            name={this.props.img.name} 
            style={{ background: `url(${this.props.img.pic})` }} 
            check="false"
            onClick={this.handleClick.bind(this)}>
        </div>
      </>
    )
  }
}

export default Card