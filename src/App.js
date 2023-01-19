import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      frase: '',
      biscoitoImagem: require('./assets/biscoito.png'),
    }

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];

    this.abrir = this.abrir.bind(this);
  }

  abrir(){
    let state = this.state;
    let randomNum = Math.floor(Math.random() * this.frases.length);
    state.frase = this.frases[randomNum];
    state.biscoitoImagem = require('./assets/biscoitoAberto.png');
    this.setState(state);
    setTimeout(() => {
      state.biscoitoImagem = require('./assets/biscoito.png');
      this.setState(state);
    }, 1000);
    
  }
  
  render(){
    return(
      <div className='container'>
        <h1>Biscoito da Sorte</h1>
        <img src={this.state.biscoitoImagem} alt="Biscoito da sorte"/>
        <h3>{this.state.frase === '' ? '"Aqui apareçar a frase..."' : '"' + this.state.frase + '"'}</h3>
        <button onClick={this.abrir}>Abrir biscoito</button>
      </div>
    );
  }
}

export default App;
