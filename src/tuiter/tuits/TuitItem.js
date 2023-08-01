import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import { connect } from 'react-redux';
import { deleteTuit } from '../reducers/tuits-reducer';
import { BiX } from 'react-icons/bi';
import TuitStats from './TuitStats';

class TuitItem extends React.Component {
  deleteTuitHandler(id) {
    this.props.deleteTuit(id);
  }

  render() {
    const { tuit } = this.props;
    return (
      <div className="row">
        <div className="col-1 d-flex align-items-baseline">
          <img width={50} className="float-left rounded-circle" src={`/images/${tuit.image}`} alt="" />
        </div>
        <div className="col-11">
          <BiX className="bi bi-x-lg float-end" onClick={() => this.deleteTuitHandler(tuit._id)} />
          <div className="d-flex align-items-center">
            <span className="me-2 fw-bold">{tuit.userName}</span>
            <FaCertificate className="fs-7 text-primary me-2" />
            <span>{tuit.handle} · {tuit.time}</span>
          </div>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteTuit: deleteTuit
};

export default connect(null, mapDispatchToProps)(TuitItem);
