import React, { Component } from "react";
import marked from "marked";

class ShowPage extends Component {
  nUpdates = 0;

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      result: null
    };

    this.componentDidUpdate({ match: { params: { slug: null } } });
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate... ");

    const slug = this.props.match.params.slug || "index";
    this.props.match.params.slug = slug;
    if (prevProps.match.params.slug === slug) {
      return null;
    }

    console.log("fetch");
    fetch(`http://localhost:4000/api/pages/${slug}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  createMarkup(page) {
    return { __html: marked(page) };
  }

  render() {
    console.log("render...");

    const { error, isLoaded, result } = this.state;
    if (!isLoaded) return null;
    if (error) {
      console.error(error);
      return <p>{error}</p>;
    }
    const { status, message, page } = result;
    if (status !== "ok") return <p>{message}</p>;

    return <div dangerouslySetInnerHTML={this.createMarkup(page)} />;
  }
}

export default ShowPage;
