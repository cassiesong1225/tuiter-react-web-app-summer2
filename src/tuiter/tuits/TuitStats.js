import React from 'react';
import { useDispatch } from 'react-redux';
import { likeTuit, unlikeTuit } from '../reducers/tuits-reducer';
import { BsChat, BsArrowRepeat, BsHeart, BsUpload } from 'react-icons/bs';

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    const handleLike = () => {
        if (tuit.liked) {
            dispatch(unlikeTuit(tuit._id));
        } else {
            dispatch(likeTuit(tuit._id));
        }
    };

    return (
        <div className="tuit-stats" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <BsChat /> {tuit.replies}
            </div>
            <div>
                <BsArrowRepeat /> {tuit.retuits}
            </div>
            <div onClick={handleLike} style={{ color: tuit.liked ? 'red' : 'black' }}>
                <BsHeart /> {tuit.likes}
            </div>
            <div>
                <BsUpload />
            </div>
        </div>
    );

};

export default TuitStats;
