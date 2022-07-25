import React,{Component} from "react";
import DisplaySnacks from "../components/DisplayFood";
import '../components/Food.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { snackList: this.props.snacks };
  }
  changeOnSearch = (event) => {
    if (event.target.value === "") {
      this.setState({ snackList: this.props.snacks });
    } else {
      const searchedList = this.state.snackList.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      this.setState({ snackList: searchedList });
    }
  };
  render() {
    return (
      <div className="search">
        <h3>Search</h3>
        <input type="text" placeholder="Search Your Snack" id="search" onChange={this.changeOnSearch}></input>
        <DisplaySnacks snacks={this.state.snackList}/>
      </div>
    );
  }
}