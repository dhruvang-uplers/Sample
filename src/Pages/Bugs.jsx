import CreateBug from "../Components/Bugs/CreateBug";
import ViewBug from "../Components/Bugs/ViewBug";

export default function Bugs() {
    return (
        <section className="w-96">
            <CreateBug />
            <ViewBug />
        </section>
    )
}
