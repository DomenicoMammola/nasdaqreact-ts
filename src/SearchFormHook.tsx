//https://www.toptal.com/react/react-hooks-typescript-example
//https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

import React, { useState } from 'react'

/*
export interface SearchFormHookProps = {

}*/

export default function SearchFormHook() {
    const [cerca, setCerca] = useState<string>('Apple');
    const [note, setNote] = useState(String);
    function onChangeCerca(event: React.ChangeEvent<HTMLInputElement>) {
        setCerca(event.target.value);
    }
    function onChangeNote(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setNote(event.target.value);
    }
    function invioForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            cerca: { value: string };
            note: { value: string };
        };
        const cerca2 = target.cerca.value; // typechecks!
        const note2 = target.note.value; // typechecks!          
        alert('Hai inserito il valore: ' + cerca2);

        alert('Hai inserito il valore: ' + cerca);
    }

    return (
        <div>
            <form onSubmit={invioForm}>
                <input type="text" name="cerca" value={cerca} onChange={onChangeCerca}></input>
                <textarea name="note" value={note} onChange={onChangeNote}></textarea>
                <input type="submit" value="invio"></input>
            </form>
        </div>

    )
}

