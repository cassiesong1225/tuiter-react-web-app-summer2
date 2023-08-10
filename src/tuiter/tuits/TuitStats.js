import React from 'react';
import { useDispatch } from 'react-redux';
import { BsChat, BsArrowRepeat, BsHandThumbsDown, BsUpload } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
    };

    const handleDislike = () => {
        dispatch(updateTuitThunk({ ...tuit, dislikes: (tuit.dislikes || 0) + 1 }));
    };

    return (
        <div className="tuit-stats" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <BsChat /> {tuit.replies}
            </div>
            <div>
                <BsArrowRepeat /> {tuit.retuits}
            </div>
            <div onClick={handleLike} style={{ color: tuit.likes > 0 ? 'red' : 'black' }}>
                <AiFillHeart /> {tuit.likes}
            </div>
            <div onClick={handleDislike} style={{ color: 'black' }}>
                <BsHandThumbsDown /> {tuit.dislikes || 0} {/* Fallback to 0 if dislikes is not defined */}
            </div>
            <div>
                <BsUpload />
            </div>
        </div>
    );
};

export default TuitStats;
