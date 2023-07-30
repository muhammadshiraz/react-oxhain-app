import React from "react";
import {ReactComponent as UpArrow} from "../../../Assets/Icons/Select/Select01/Down-Arrow.svg";
import {ReactComponent as DownArrow} from "../../../Assets/Icons/Select/Select01/Down-Arrow.svg";
import { OxhainSelect01 } from "./Select01.styled";

class Select01 extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0]
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item => {
    this.setState({
      selectedItem: item,
      showItems: false
    });
  };

  render() {
    return (
      <OxhainSelect01 className={`flex flex-col items-center justify-center relative z-50`}>
          <button
              type="button"
              className="flex flex-row items-center flex font-prompt font-normal text-base w-full"
              onClick={this.dropDown}
            >
              <div className="select-box--selected-item relative">
                {this.state.selectedItem.value}
              </div>
              <div className="select-box--arrow">
                {this.state.showItems ? (
                  <UpArrow className="ml-[10px]" />
                ) : (
                  <DownArrow className="ml-[10px]" />
                )}
              </div>
          </button>
          <div
            style={{ display: this.state.showItems ? "flex" : "none" }}
            className={"select-box--items absolute flex-col items-center justify-center"}
          >
            {this.state.items.map(item => (
              <div
                key={item.id}
                onClick={() => this.selectItem(item)}
                className={this.state.selectedItem === item ? "selected items" : "items"}
              >
                {item.value}
              </div>
            ))}
          </div>
      </OxhainSelect01>
    );
  }
}

export default Select01;