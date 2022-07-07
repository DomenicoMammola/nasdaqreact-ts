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
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="cerca" value={this.state.cerca} onChange={this.onChangeCerca}></input>
                    <textarea name="note" value={this.state.note} onChange={this.onChangeNote}></textarea>
                </form>
            </div>
        )
    }
}

