import React, {Component} from "react";
import '../components/Food.css';
var new_list = [];
var new_value = 1;
export default class DisplaySnacks extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  onChangeHandler = (event) => {
    new_value = event.target.value;
  };

  addItems = (item1, item2) => {
    let flags = false;
    new_value = 1;
    new_list.forEach((item) => {
      if (item[0] === item1.name) {
        flags = true;
        item[1] += item2 * item1.cal;
      }
    });
    if (flags === false) {
      new_list.push([item1.name,item2 * item1.cal]);
    }
    this.setState({ list: new_list });
  };
  listItems = () => {
    const list = this.props.snacks.map((item) => {
      return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={item.img} className="pic" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{item.name}</strong> <br/>
                  <small>{item.cal} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field_has-addons">
                <div className="control">
                  <input  className="input" type="number" min="1" defaultValue="1" onChange={this.onChangeHandler}/>
                </div>
                <div className="control">
                  <button  className="button_is-info" onClick={() => this.addItems(item, new_value)}>+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });
    return list;
  };

  removeItemsFromList = (index) => {
    new_list = this.state.list.filter((ele) => {
      if (ele[0] !== index[0]) {
        return ele;
      }
    });
    this.setState({ list: new_list });
  };
  dispalyCal = () => {
    if (this.state.list === []) {
      return <div>Total 0 Calories of Food</div>;
    } else {
      const total = this.state.list.reduce((item, index) => {
        return item + index[1];
      }, 0);

      return (
        <div className="cal">
          <h2>Today's Food: {total} cal</h2>
          {this.state.list.map((ele, index) => {
            return (
              <div className="list">
                <div>
                  {index + 1}.{  ele[0]}={ele[1]}
                </div>
                <button onClick={() => this.removeItemsFromList(ele)}>
                  x
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="main">
        <div>{this.listItems()}</div>
        {this.dispalyCal()}
      </div>
    );
  }
}