import { connect } from "react-redux"
import { auth } from "../firebase";
import { useState } from "react";

function Profile(props) {
    const { user } = props
    console.log(user);

    const [editProfile, setEditProfile] = useState(false)

    const [profile, setProfile] = useState({ displayName: '', phoneNumber: '' })

    function verifyEmail() {
        auth.currentUser.sendEmailVerification().then(function () {
            alert("Verification email sent.")
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleChange = e => setProfile({
        ...profile,
        [e.target.name]: e.target.value
    })

    function updateProfile(e) {
        e.preventDefault()
        auth.currentUser.updateProfile(profile).then(function () {
            setEditProfile(false)
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <section className="py-10 min-h-screen">
            <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
                <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
                    <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                        <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
                        <div className="md:w-2/3 max-w-sm mx-auto">
                            <label className="text-sm text-gray-400">Email</label>
                            <div className="w-full inline-flex border relative">
                                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                                    <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> </svg>
                                </div>
                                <input type="email" name="email" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder="email@example.com" defaultValue={user.email} disabled />
                                <span className="absolute top-3 right-2.5">
                                    {!user.emailVerified ?
                                        <svg width="20" xmlns="http://www.w3.org/2000/svg" className="text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        :
                                        <svg width="20" xmlns="http://www.w3.org/2000/svg" className="text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    }
                                </span>
                            </div>
                            {!user.emailVerified && <button className="text-sm text-indigo-700" onClick={verifyEmail}>Verify Now</button>}
                        </div>
                    </div>

                    <hr />
                    <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                        <h2 className="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
                        <form onSubmit={updateProfile} className="md:w-2/3 mx-auto max-w-sm space-y-5 relative">
                            <div className="absolute top-0 right-0">
                                <span onClick={() => { setEditProfile(true) }}>
                                    <svg width="15" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Full name</label>
                                <div className="w-full inline-flex border">
                                    <div className="w-1/12 pt-2 bg-gray-100">
                                        <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> </svg>
                                    </div>
                                    <input type="text" name="displayName" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder="Charly Olivas" defaultValue={user.displayName} onChange={handleChange} disabled={!editProfile} />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Phone number</label>
                                <div className="w-full inline-flex border">
                                    <div className="pt-2 w-1/12 bg-gray-100">
                                        <svg fill="none" className="w-6 text-gray-400 mx-auto" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /> </svg>
                                    </div>
                                    <input type="text" name="phoneNumber" className="w-11/12 focus:outline-none focus:text-gray-600 p-2" placeholder="12341234" defaultValue={user.phoneNumber} onChange={handleChange} disabled={!editProfile} />
                                </div>
                            </div>
                            {editProfile && <button className="text-white rounded-md text-center bg-indigo-700 w-24 py-2 px-4 focus:outline-none">Save</button>}
                        </form>
                    </div>

                    <hr />
                    <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                        <h2 className="md:w-4/12 max-w-sm mx-auto">Change password</h2>

                        <div className="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                            <div className="w-full inline-flex border-b">
                                <div className="w-1/12 pt-2">
                                    <svg
                                        fill="none"
                                        className="w-6 text-gray-400 mx-auto"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="password"
                                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                                    placeholder="New"
                                />
                            </div>
                        </div>

                        <div className="md:w-3/12 text-center md:pl-6">
                            <button className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right">
                                <svg fill="none" className="w-4 text-white mr-2" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /> </svg>
                                Update
                                </button>
                        </div>
                    </div>

                    <hr />
                    <div className="w-full p-4 text-right text-gray-500">
                        <button className="inline-flex items-center focus:outline-none mr-4 text-red-700"><svg fill="none" className="w-4 mr-2" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> </svg>Delete account</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
function mapStateToProps(state) {
    return {
        user: state.AuthReducer.user
    };
}
export default connect(mapStateToProps)(Profile)