import React from 'react';
import articleContent from './article-content';

const Article = ({ match }) => {
    const name = match.params.name;
    //ES6
    //const article = articleContent.find(article => article.name === name );
    //< ES5 
    const article = articleContent.find( function(article) {
        return article.name === name;
    });

    if (!article) return <h1>Article does not exist</h1>

    return ( 
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
        </>

    );
} 

export default Article;