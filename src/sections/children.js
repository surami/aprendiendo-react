import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {
  render () {
    const {children} = this.props;
    return (
      <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
        {children}
      </div>
    )
  }
}

class Article extends Component {
  static propsTypes = {
    author: PropTypes.string.isRequired
  }
  render () {
    const {author, children, date, title} = this.props;

    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <date>{date}</date>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class Children extends Component {
  render () {
    return (
      <div className="App">
        <h4>Children props</h4>
        <Article
          author='Miguel'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
        <Article
          author='Miguel'
          date={new Date().toLocaleDateString()}
          title='Artículo 2'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
        <Article
          author='Miguel'
          date={new Date().toLocaleDateString()}
          title='Otro artículo'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
      </div>
    );
  }
}

export default Children;