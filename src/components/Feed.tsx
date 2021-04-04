import React from 'react'
import { auth } from "../firebase";

const Feed = () => {
    return (
        <div>
            Feedです
            <button onClick={() => auth.signOut()}>Logout</button>
        </div>
    )
}

export default Feed
