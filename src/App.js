import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ContadorView from './Contador.js'
// import ConditionalSection from './sections/conditional.js'
// import Listas from './sections/listas.js'
// import ListaObjetos from './sections/listaObjetos.js'
// import Events from './sections/events.js'
// import Forms from './sections/forms'
// import Children from './sections/children';
// import Constructor from './sections/life-cycle/constructor.js';
// import ComponentWillMount from './sections/life-cycle/componentWillMount.js';
// import ComponentDidMount from './sections/life-cycle/componentDidMount.js';
//import EjemploCicloDeActualizacion from './sections/life-cycle/ejemploCicloDeActualizacion.js';
//import ComponentWillUnmount from './sections/life-cycle/componentWillUnmount.js';
//import EjemploDeComponentDidCatch from './sections/life-cycle/componentDidCatch.js'
//import FetchExample from './sections/fetch-example.js';
//import ComponentWithComposition from './sections/componentsWithComposition.js'
//import ComponentWithInheritance from './sections/componentsWithInheritance.js'
//import StatelessWithPropTypes from './sections/stateless-proptypes.js'
import BitCoinPriceContainer from './sections/containter-component/index.js'

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title='Curso React'/>
        </header>
{/*         <ContadorView />
        <ConditionalSection />
        <ListaObjetos /> 
        <Events />
        <Forms />
        <Children />
        <Constructor />
        <ComponentWillMount />
        <ComponentDidMount />
        <FetchExample />
        <EjemploCicloDeActualizacion />
        <ComponentWillUnmount />
        <EjemploDeComponentDidCatch />
        <ComponentWithInheritance />
        <ComponentWithComposition />
        <StatelessWithPropTypes />*/}
        <BitCoinPriceContainer />
        
      </div>
    );
  }
}

export default App;
