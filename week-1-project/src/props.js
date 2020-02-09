import React from 'react';

function App(props) {
    return (
        <section id="app">
            <h1 data-testid="title">{props.title}</h1>
    {props.addDescription === true ? <p data-testid="description">This is a description of my app</p> : null}
            {props.articles ? props.articles.map(article => <NewsArticle />) : null}
            {console.log('####',props.articles)}
            {props.articles ? (
                <p data-testid="reading-length">
                    Reading all article will take you {props.calculateReadingLength &&
                     props.calculateReadingLength(props.articles.reduce((accumulator, article) => 
                     accumulator + article.text , ''))} minute
                </p>
            ): null}
        </section>
    );
}

function NewsArticle() {
    return (
        <article data-testid="news-article">
            <h1>Article</h1>
        </article>
    );
}

export { App };