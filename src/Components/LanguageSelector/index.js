import React from "react";
import UpArrow from "../../Assets/Images/HaveAnAccount/Up-Arrow.png";
import DownArrow from "../../Assets/Images/HaveAnAccount/Down-Arrow.png";
import { OxhainLanguageSelector } from "./LanguageSelector.styled";

class LanguageSelector extends React.Component {
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
      <OxhainLanguageSelector className="relative flex flex-row justify-end font-prompt">
          <button
              type="button"
              className="items-center font-normal text-base text5 flex flex-row justify-end"
              onClick={this.dropDown}
            >
              <div className="select-box--selected-item">
                {this.state.selectedItem.value}
              </div>
              <div className="select-box--arrow">
                {this.state.showItems ? (
                  <img src={UpArrow} alt="Up Arrow" className="ml-2 w-[16px]" />
                ) : (
                  <img src={DownArrow} alt="Down Arrow" className="ml-2 w-[16px]" />
                )}
              </div>
          </button>
          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={"select-box--items absolute"}
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
      </OxhainLanguageSelector>
    );
  }
}

export default LanguageSelector;