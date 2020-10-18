import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import Card from "./Card";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: "",
      displayData: "",
      currentCategory: "",
    };
  }

  getData = async () => {
    let productData = {};
    const result = await axios.get(
      "https://run.mocky.io/v3/a924f70c-0a64-475f-9ef1-3209c3782c0f"
    );
    result.data.products.forEach((element) => {
      productData[element.category_type] = productData[element.category_type]
        ? [...productData[element.category_type], element.name]
        : [element.name];
    });
    return productData;
  };

  handleChangeCategory(element) {
      if(this.state.productData){
          let displayData = this.state.productData[element.textContent];
          this.setState({ displayData, currentCategory: element.textContent });
      }
  }

  async componentDidMount() {
    let productData = await this.getData();
    let displayData = [];
    _.map(productData, (element, key) => {
      displayData = [...displayData, ...element];
    });
    this.setState({ productData, displayData });
  }

  renderCard() {
    if (this.state.displayData) {
      let cards = [];
      _.map(this.state.displayData, (element, key) => {
        cards.push(<Card key={key} name={element} />);
      });
      return cards;
    } else {
      return <div>Loading .......</div>;
    }
  }

  renderSideBar() {
    let list = [];
    if (this.state.productData) {
      let categories = _.keys(this.state.productData);
      categories.sort();
      _.map(categories, (element, key) => {
        if (this.state.currentCategory == element) {
          list.push(
            <li
              key={key}
              onClick={({ target }) => this.handleChangeCategory(target)}
            >
              <b>{element}</b>
            </li>
          );
        } else {
            list.push(
                <li
                  key={key}
                  onClick={({ target }) => this.handleChangeCategory(target)}
                >
                  {element}
                </li>
              );
        }
      });
      return <ul>{list}</ul>;
    } else {
      return <div>Loading .......</div>;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sms-6">
          <div className="col sidebar">
            <h4>Category</h4>
            {this.renderSideBar()}
          </div>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-6">
          <div className="row">{this.renderCard()}</div>
        </div>
      </div>
    );
  }
}

export default CardContainer;
