import React, {Component} from "react"
import { images } from "../Components/Images/index.js"

class Cards extends Component {

  characters = []

  handleClick(e){
    let character = e.target
    if (character.getAttribute("check") === "found") {
      return
    }
    if (character !== this.characters[0]) {
      this.switch(character)
      this.characters.push(character)
    } else {
      this.switch(character)
      this.characters = []
    }
    if (this.characters.length > 2) {
      if (!this.checkName(this.characters[0], this.characters[1])) {
        this.switch(this.characters[0])
        this.switch(this.characters[1])
        this.characters.shift()
        this.characters.shift()
      } else {
        this.characters.shift()
        this.characters.shift()
      }
    }
    let allPictures = document.getElementsByClassName("image-back")
    if (allPictures.length < 1) {
      this.props.endGame(true)
      let reset = document.getElementsByClassName("image")
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-back")
        reset[i].setAttribute("check", "false")
        this.characters = []
      }
    }
  }

  checkName = (character1, character2) => {
    if (character1.getAttribute("name") === character2.getAttribute("name")) {
      character1.setAttribute("check", "found")
      character2.setAttribute("check", "found")
      return true
    }
    return false
  }

  switch = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false")
      target.classList.add("image-back")
    } else {
      target.setAttribute("check", "true")
      target.classList.remove("image-back")
      console.log(target)
    }
  }

  render() {
    return (
      <>
        <div className="images">
          {images.sort(() => Math.random() - 0.5).map((element) => {
            return ( 
              <div 
                className="image image-back" 
                key={element.id}
                name={element.name} 
                style={{ background: `url(${element.pic})` }} 
                check="false"
                onClick={this.handleClick.bind(this)}>
             </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default Cards