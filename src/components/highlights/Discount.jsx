import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import MyButton from '../utils/MyButton'

export default class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

  porcentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage()
    },30)
  }



  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={()=> this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div> 
          </Fade>
         <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>Eiusmod sit officia cupidatat exercitation elit sit incididunt aliqua pariatur occaecat. Cillum adipisicing consectetur sunt sit commodo est esse laborum et. Sit eu elit mollit eu occaecat nisi do do eiusmod ut anim id. Proident velit duis aute incididunt non ex fugiat ullamco ullamco proident fugiat consectetur. Ut exercitation sint officia veniam nisi proident amet ea non incididunt. Sunt quis dolor fugiat pariatur deserunt.</p>

              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
  
            </div>
         </Slide>
        </div>
        
      </div>
    )
  }
}
