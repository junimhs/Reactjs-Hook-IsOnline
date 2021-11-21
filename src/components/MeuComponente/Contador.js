import { useState } from 'react';

function Contador(props) {
    const [count, setCount] = useState(0)

    return (
        <div>
            Contador: {count} <br/>
            <button type="button" onClick={() => setCount(count + 1)}>Aumentar count</button>
        </div>
    );
}

export default Contador;