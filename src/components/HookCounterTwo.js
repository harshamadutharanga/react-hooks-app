import React, { useState} from 'react'

function HookCounterTwo() {
    const harsha = 0;
    const [count, setCount] = useState(harsha);
     const Increment5 = () => {
         for(let i=0; i<5; i++)
        {
            setCount(prevCount => prevCount + 1)
        }

    }
       
    return (
        <div>
        Count: {count}
            <button onClick={() => setCount(harsha)}>InitialCount</button>
            <button onClick={() => setCount(count+1)} >Increment</button>
            <button onClick={() => setCount(count-1)} >Dicrement</button>
            <button onClick={Increment5}>Increment5</button>
        </div>
    )
}

export default HookCounterTwo
