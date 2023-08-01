import React, {useState} from "react";
import {createTuit} from "./reducers/tuits-reducer";
import {useDispatch} from "react-redux";
import {BsCardImage, BsFiletypeGif, BsEmojiSmile, BsBarChart} from "react-icons/bs";
import {SlLocationPin} from "react-icons/sl";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    }
    dispatch(createTuit(newTuit));
    setWhatsHappening("");

  }
  return (
      <div className="row">
        <div className="col-auto">
          <img src="/images/nasa.png" width={60} alt=""/>
        </div>
        <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
          <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={tuitClickHandler}>
              Tuit
            </button>
            <div className="text-primary fs-2">
              <BsCardImage className="text-primary me-3 fs-1" />
              <BsFiletypeGif className="text-primary me-3 fs-1" />
              <BsBarChart className="text-primary me-3 fs-1" />
              <BsEmojiSmile className="text-primary me-3 fs-1" />
              <SlLocationPin className="text-primary me-3 fs-1" />
            </div>
          </div>
        </div>
        <div className="col-12"><hr/></div>
      </div>
  );
}
export default WhatsHappening;
