import React from "react";
import PhoneUpArrow from "../../Assets/Images/PhoneCodeSelector/Phone-Up-Arrow.png";
import PhoneDownArrow from "../../Assets/Images/PhoneCodeSelector/Phone-Down-Arrow.png";
import SearchIcon from "../../Assets/Images/PhoneCodeSelector/search-icon.png";
import { OxhainPhoneCodeSelector } from "./PhoneCodeSelector.styled";

class PhoneCodeSelector extends React.Component {
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
      <OxhainPhoneCodeSelector>
          <button
              type="button"
              className="mx-3 w-[50px] flex flex-row items-center text5 flex font-prompt font-normal text-xl"
              onClick={this.dropDown}
            >
              <div className="select-box--selected-item">
                {this.state.selectedItem.value}
              </div>
              <div className="select-box--arrow">
                {this.state.showItems ? (
                  <img src={PhoneUpArrow} alt="Up Arrow" className="w-[16px] ml-[10px]" />
                ) : (
                  <img src={PhoneDownArrow} alt="Down Arrow" className="w-[16px] ml-[10px]" />
                )}
              </div>
          </button>
          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={"select-box--items absolute"}
          >
            <div className="w-full h-[40px] background02 rounded-sm mb-3 flex flex-row items-center"><button type="button" className="ml-3"><img src={SearchIcon} className="w-max" /></button><input type="text" className="w-full pl-2" /></div>
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
      </OxhainPhoneCodeSelector>
    );
  }
}

export default PhoneCodeSelector;