import React from 'react';
import axios from 'axios';
import {useAuth} from '../context/Auth.jsx';
import {Button} from 'react-bootstrap';

const ClassList = ({classinfo}) => {
  const { token } = useAuth();

  const bookclass = (class_id) => {
    console.log(class_id);
    axios.post('http://localhost:3001/api/v1/bookclass', { id: class_id }, {
      headers: {'Authorization': token}
    })
      .then((res) => {
        alert('Successfully booked!');
        location.reload();
      })
      .catch((err) => console.error(err));
  };


  return (
    <div className="classcard">
      <div className="classmain">
        <div className="pics">
          <img src={classinfo.image}/>
        </div>
        <div className="classbody">
          <div className="classhead">
            <div className="classname">NAME</div>
            <div className="classname">START DATE</div>
            <div className="classname">END DATE</div>
          </div>
          <div className="classhead">
            <div className="classname">{classinfo.name}</div>
            <div className="classname">{classinfo.start_date}</div>
            <div className="classname">{classinfo.end_date}</div>
          </div>
          <div className="classdesc"><Button onClick={()=>{ bookclass(classinfo.id); }}>Book</Button></div>
        </div>
      </div>
    </div>
  );
};

export default ClassList;
