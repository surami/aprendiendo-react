import React, { Component } from 'react';
import logo from './logo.svg';

// function Hello (props) {
//   return <h2>{props.title}</h2>
// }

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render(){
    const {
      arrayOfNumbers, 
      multiply,
      objectWithInfo,
      title
    } = this.props

    const mappedNumbers = arrayOfNumbers.map(multiply)

    return (
      <div>
        {title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.param1}</p>
      </div>
    )
  }
}

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {contador : this.props.contadorInicial};
    setInterval(() => {
      this.setState({contador: this.state.contador + 1})
    }, 1000);
  }

  render(){
    return <ContadorNumero numero = {this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>;
  }
}

class ContadorView extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title='Hello form props'/>
        </header>
        <Text 
          arrayOfNumbers={[2, 3, 10]}
          objectWithInfo={{param1:'First Value', param2: 'otherValue'}}
          multiply={(n) => n * 4}
          number={2} 
          text='Texto en string' 
          isActivated={true}
          title = {<h1>Esto es un titulo</h1>}
        />
        <div>
          <p>Primer componente con state</p>
          <Contador contadorInicial = {100}/>
        </div>
      </div>
    );
  }
}

export default ContadorView;