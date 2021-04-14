import Store from "../../Redux/Store";
import { bugAdded, bugRemoved, bugResolved } from "../../Redux/Actions";

export default function CreateBug() {
    function handleSubmit(e) {
        e.preventDefault();
        const description = e.target.description.value
        Store.dispatch(bugAdded(description))
        e.target.reset()
    }
    return (
        <form className="flex border border-indigo-700 justify-between" onSubmit={handleSubmit}>
            <input type="text" name="description" className="py-2 px-4 flex-1 focus:outline-none" />
            <button className="bg-indigo-700 text-white py-2 px-4 w-24 focus:outline-none">Add</button>
        </form>
    )
}
