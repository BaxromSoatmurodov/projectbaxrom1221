import "./PostAddForml.css";
import React from "react";
export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.body);
    this.setState({ body: "" });
  }
  onChange(e) {
    this.setState({ body: e.target.value });
  }
  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What are you thanking about?"
          className="form-control new-post-label"
          onChange={this.onChange}
          value={this.state.body}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add Post
        </button>
      </form>
    );
  }
}
