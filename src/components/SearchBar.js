import React, { Component } from "react";
import { Searchbar, Surface } from "react-native-paper";
import { StyleSheet } from "react-native";

export default class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  handleTextChange = (term) => this.setState({ searchTerm: term });

  handleSubmit = (e) => {
    e.preventDefault();

    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <Surface>
        <Searchbar
          placeholder="Search"
          onChangeText={this.handleTextChange}
          value={searchTerm}
          onSubmitEditing={this.handleSubmit}
        />
      </Surface>
    );
  }
}
