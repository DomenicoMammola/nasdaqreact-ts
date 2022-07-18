import React from 'react'

export interface StockOldProps {nome : String, eta: number, showEta? : any}

type StockOldState = {
    nome : String,
    eta : number,
    showEta : any
}

export default class StockOld extends React.Component <StockOldProps, StockOldState> {    
    state : StockOldState = {
        nome : this.props.nome,
        eta : this.props.eta,
        showEta : this.props.showEta
    }
    aggiornoStato = () => {
        const nuovaEta : number = this.state.eta + 1;
        this.setState({eta : nuovaEta});
        console.log ("nuova età:" + nuovaEta);
        if (nuovaEta >= 18) {
            this.state.showEta(this.state.nome);
        }
    }
    realTime = () => {
        setInterval(()=>(this.aggiornoStato()), 3000);
    }
  render() {    
    return (
      <div>
          <p>
          Stock {this.state.nome} età {this.state.eta}
          </p>
          <button onClick={this.realTime}>Aggiorna</button>
      </div>
    )
  }
}
