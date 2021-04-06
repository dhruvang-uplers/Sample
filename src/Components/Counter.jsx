import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <span className="w-96 py-2 px-4 border-2 border-indigo-700">{count}</span>
            <button className="py-2 px-4 bg-indigo-700 text-white m-2 focus:outline-none" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button className="py-2 px-4 bg-indigo-700 text-white m-2 focus:outline-none" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button className="py-2 px-4 bg-indigo-700 text-white m-2 focus:outline-none" onClick={() => setCount(0)}>Reset</button>
        </>
    )
}
