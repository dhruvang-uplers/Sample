import { useState, useEffect } from "react"
import { db } from "../firebase";
export default function Invites() {
    const [loading, setLoading] = useState(false)
    const [invite, setInvite] = useState({ type: '', date: '', venue: '' })
    const [myinvites, setMyinvites] = useState([])
    const handleChange = e => setInvite({
        ...invite,
        [e.target.name]: e.target.value
    })
    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true);
        console.log(invite);
        db.collection("invites").add(invite).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            setLoading(false);
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    useEffect(() => {


        db.collection("invites").get().then((docs) => {
            console.log(docs);
            docs.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        });

        // const invitesRef = db.collection("invites");
        // invitesRef.get().then(doc => {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch(error => {
        //     console.error(error);
        // })
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div>

            </div>
            <div className="p-5 shadow-md w-96">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl text-center mb-5">Invitation Form</h3>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Type</label>
                        <select name="type" id="type" className="border px-4 py-2" defaultValue="" onChange={handleChange}>
                            <option value="" disabled>Choose Option</option>
                            <option value="marriage">Marriage</option>
                            <option value="birthday">birthday</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Date</label>
                        <input type="date" name="date" id="date" className="border px-4 py-2" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Venue</label>
                        <input type="text" name="venue" id="venue" className="border px-4 py-2" onChange={handleChange} />
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <button className="bg-indigo-700 text-white px-4 py-2 w-auto" disabled={loading}>Create Invite</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
