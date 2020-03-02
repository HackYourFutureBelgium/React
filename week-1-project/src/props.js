import React from "react";


class App extends React.Component {
    render(){
        return(
    <section>
    <h1 data-testid="title">{this.props.title}</h1>
    {this.props.addDescription === true ? (<p data-testid="description">This is a description of my app</p>) : null}
    {this.articles ? this.props.articles.map(article => <NewsArticle data={article} />): App}

    {this.props.articles ? (<p data-testid="reading-length">Reading all article will take you{" "}
    {this.props.calculateReadingLength && this.props.calculateReadingLength(this.props.articles.reduce((accumulator, article) => accumulator + article.text,""))}
    {" "} minutes </p>) : App}
    
    </section>

    
        );
    }
};

function NewsArticle(props) {
    return (
        <article data-testid="news-article">
            <h1>{props.data.title}</h1>
        </article>
    );
}

export { App , NewsArticle};