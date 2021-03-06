import { RecordWithTtl } from 'dns'
import React, { Component } from 'react'

type SearchFormState = {
    cerca: string,
    note: string
}

export default class SearchForm extends Component<any, SearchFormState> {
    state: SearchFormState = {
        cerca: 'Apple',
        note: ''
    }
    onChangeCerca = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({cerca: event.target.value});

    }
    onChangeNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({note: event.target.value});
    }
    invioForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();        
        
        const target = event.target as typeof event.target & {
            cerca: { value: string };
            note: { value: string };
          };
          const cerca = target.cerca.value; // typechecks!
          const note = target.note.value; // typechecks!          
        alert ('Hai inserito il valore: ' +  cerca);

        alert ('Hai inserito il valore: ' + this.state.cerca);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.invioForm}>
                    <input type="text" name="cerca" value={this.state.cerca} onChange={this.onChangeCerca}></input>
                    <textarea name="note" value={this.state.note} onChange={this.onChangeNote}></textarea>
                    <input type="submit" value="invio"></input>
                </form>
            </div>
        )
    }
}

