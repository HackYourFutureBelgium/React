import React, { Component } from "react";
import marked from "marked";

const API_PREFIX_URL = "http://localhost:4000/api/pages";

export default class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = { page: undefined, isLoading: true, error: undefined };
  }

  async loadPage() {
    let slug = this.props.match.params.slug;
    if (!slug) {
      slug = "index";
    }
    const res = await fetch(`${API_PREFIX_URL}/${slug}`);
    const json = await res.json();
    if (json.status === "ok") {
      this.setState({ page: json.page, isLoading: false, error: undefined });
    } else {
      this.setState({ error: json.error, isLoading: false });
    }
  }

  async componentDidMount() {
    this.loadPage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.loadPage();
    }
  }

  render() {
    const { page, isLoading, error } = this.state;
    if (isLoading) {
      return <p className="loading">Loading...</p>;
    }
    if (error) {
      return <p className="error">{error} </p>;
    }
    const html = { __html: marked(page.body) };

    return (
      <div className="page">
        <h2 className="page__title">{page.title}</h2>
        <div className="page__body" dangerouslySetInnerHTML={html} />
      </div>
    );
  }
}
