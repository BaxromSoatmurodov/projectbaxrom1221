import React from "react";
export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", status: "All" },
      { name: "like", status: "Liked" },
    ];
  }

  render() {
    const button = this.buttons.map(({ name, status }) => {
      const active = this.props.filter === name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => this.props.FilterPostFn(name)}
        >
          {status}
        </button>
      );
    });

    return <div className="btn-group">{button}</div>;
  }
}
