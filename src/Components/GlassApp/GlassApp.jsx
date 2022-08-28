import React, { Component } from "react";
import "../StyleComponent/Style.css";
import data from "./dataGlasses.json";
export default class GlassApp extends Component {
  state={
    glass:{
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }
  render() {
    return (
      <div className="backgroundImg">
        <div className="theme_dark">
          <div className="container-fluid header">
            <p className="text-white">TRY GLASSES APP ONLINE</p>
          </div>
          <div className="content">
            <div className="model">
              <div className="model_1">
                {/* <img src="./Image/glassesImage/v1.png" alt="glass" />
                <div className="info_glass"></div> */}
              </div>
              <div className="model_1">
                <img src={this.state.glass.url} alt="glass" />
                <div className="info_glass">
                  <h5>{this.state.glass.name}</h5>
                  <p>{this.state.glass.desc}</p>
                </div>
              </div>
            </div>
            <div className="container glassOptions">
              {data.map((dataGlass) => {
                return <img src={dataGlass.url} alt={dataGlass.name} onClick={()=>{
                  this.setState({
                    glass:dataGlass
                  })
                }}/>;
              })}
              {/* <img src="./Image/glassesImage/g1.jpg" alt="" />
              <img src="./Image/glassesImage/g2.jpg" alt="" />
              <img src="./Image/glassesImage/g3.jpg" alt="" />
              <img src="./Image/glassesImage/g4.jpg" alt="" />
              <img src="./Image/glassesImage/g5.jpg" alt="" />
              <img src="./Image/glassesImage/g6.jpg" alt="" />
              <img src="./Image/glassesImage/g7.jpg" alt="" />
              <img src="./Image/glassesImage/g8.jpg" alt="" />
              <img src="./Image/glassesImage/g9.jpg" alt="" /> */}
            </div>
            <div className="container gap_bottom"></div>
          </div>
        </div>
      </div>
    );
  }
}
