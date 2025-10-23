import { use, useState } from "react";

export default function Like() {
    const [liked, setLiked] = useState(false);
    const [load, setLoad] = useState(null);
    function toggleLike() {
        setLoad(!load);
        setTimeout(() => {
            setLiked(!liked);
            setLoad(false);
        }, 1000);

    }
    return (
        <div>
            <button onClick={toggleLike}>
                {liked? "Unlike" : "Like"}
            </button>
            {load && <p>Loading...</p>}
            {!load && liked && <p>You liked the msg</p>}
            {!load && !liked && <p>Give a like to support</p>}
        </div>


    );
}