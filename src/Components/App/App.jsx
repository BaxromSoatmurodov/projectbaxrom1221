import AppHeader from "../AppHeader/AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going React-js", important: false, like: false, id: 1 },
        { label: "That is so good", important: false, like: false, id: 2 },
        { label: "I need a break", important: false, like: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
    this.onDelete = this.onDelete.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.searchPost = this.searchPost.bind(this);
    this.TermValueFn = this.TermValueFn.bind(this);
    this.FilterPost = this.FilterPost.bind(this);
    this.FilterPostFn = this.FilterPostFn.bind(this);

    this.maxId = 4;
  }
  onDelete(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr,
      };
    });
  }
  addItem(body) {
    const Item = {
      label: body,
      important: false,
      like: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, Item];
      return {
        data: newArr,
      };
    });
  }
  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((element) => element.id === id);

      const oldItem = data[index];

      const newItem = { ...oldItem, important: !oldItem.important };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }
  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const oldItem = data[index];

      const newItem = { ...oldItem, like: !oldItem.like };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }
  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => item.label.indexOf(term) > -1);
  }
  FilterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }
  TermValueFn(term) {
    this.setState({ term });
  }
  FilterPostFn(filter) {
    this.setState({ filter });
  }
  render() {
    const { term, data, filter } = this.state;
    const countLikes = data.filter((item) => item.like).length;
    const countPosts = data.length;
    const VisiblePost = this.FilterPost(this.searchPost(data, term), filter);
    return (
      <div className="App">
        <AppHeader countLikes={countLikes} countPosts={countPosts} />
        <div className="search-panel d-flex">
          <SearchPanel TermValueFn={this.TermValueFn} />
          <PostStatusFilter filter={filter} FilterPostFn={this.FilterPostFn} />
        </div>
        <PostList
          posts={VisiblePost}
          onDelete={this.onDelete}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm addItem={this.addItem} />
      </div>
    );
  }
}
