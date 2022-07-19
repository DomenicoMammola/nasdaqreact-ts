import React, { useEffect, useRef, useState } from 'react'

type Props = { nome: string, eta: number }

export default function StockHook(props: Props) {
    const [eta, setEta] = useState(props.eta);
    const [start, setStart] = useState(false);    
    const timerRef: { current: NodeJS.Timer | null } = useRef(null);
    const realTime = () => {
        if (! start) {
            timerRef.current = setInterval(()=>{aggiornoStato();}, 3000);
            setStart(!start);
        }
    }



    const aggiornoStato = () => {        
        setEta((prevEta: number) => {return (prevEta + 1);});        
    }
    useEffect(() => {
     console.log("Effetto in azione. Età: " + eta);
    })

    useEffect(() => {
      console.log("Effetto in azione solo nel mounting");
      //const timer = setInterval(()=> {aggiornoStato()}, 3000);
      //return () => {
      //    clearInterval(timer);
      //}
    }, [])
    
    useEffect(() => {
      console.log("Effetto in azione solo nell'updating");
      if (eta>=18)    {
          console.log ("Sono maggiorenne: "+ eta);
      }
    }, [eta])
    
    
    return (
        <div><h3>Figlio {props.nome}</h3>
        <p>Età {eta}</p>
        <button onClick={aggiornoStato}>Aggiorno</button>
        <button onClick={realTime}>Aggiorno realtime</button>
        </div>
    )
}