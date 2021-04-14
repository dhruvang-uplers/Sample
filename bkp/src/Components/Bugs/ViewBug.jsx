import Store from "../../Redux/Store";
import { bugRemoved, bugResolved } from "../../Redux/Actions";
import { useState, useEffect } from "react";

export default function ViewBug() {

    const [bugs, setBugs] = useState([]);

    Store.subscribe(() => {
        const bugs = Store.getState()
        setBugs(bugs)
    })

    function resolve(e, id) {
        e.target.checked && Store.dispatch(bugResolved(id))
    }
    function remove(id) {
        Store.dispatch(bugRemoved(id))
    }

    return (
        <ul>
            {bugs.map(el => {
                return <div key={el.id} className="w-full border border-gray-200 flex justify-between items-center">
                    <label className="py-2 px-4 block flex-1">
                        <input type="checkbox" name="resolved" value={el.id} onChange={e => resolve(e, el.id)} /> <span className={`${el.resolved ? 'line-through' : ''}`} > {el.description}</span>
                    </label>
                    <span className="py-2 px-4 cursor-pointer font-bold text-2xl" onClick={e => remove(el.id)}>&times;</span>
                </div>
            })}
        </ul>
    )
}
