import React from 'react';

function App() {
    const result = 23434 * 0.345;
    return (
        <section>
            <h1>The Example App</h1>
            <NewsArticle />
            <p>
                Renders the value of a variable: <span>{result}</span>
            </p>
            <button data-testid="load-more" onClick={() => { console.log('The button was clicked') }}>Load More</button>
        </section>
    );
}

function NewsArticle() {
    return (
        <article>
            <h1>Article</h1>
            
        </article>
    )
}
function MyApp() {
    return <p>My First React App</p>;
 
}

export { App, MyApp };