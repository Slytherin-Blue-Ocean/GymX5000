import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Carousel } from 'react-responsive-carousel';
import './carousel.min.css';

import ClassList from '../subcomponents/ClassList.jsx';
import ClassCard from '../subcomponents/ClassCard.jsx';

import {useAuth} from '../context/Auth.jsx';


const Classes = () => {
  const { token } = useAuth();
  const [history, setHistory] = useState([]);
  const [favclass, setFavclass] = useState([]);
  const [classlist, setClasslist] = useState([]);

  const getallclasses = () => {
    if (token) {
      axios.get('http://localhost:3001/api/v1/classes', {
        headers: {'Authorization': token} // add this for authentication
      })
        .then((res) => setClasslist(res.data))
        .catch((err) => console.error(err));
    } else {
      console.log('token problem');
    }
  };

  const getfavor = () => {
    if (token) {
      axios.get('http://localhost:3001/api/v1/favoriteclass', {
        headers: {'Authorization': token} // add this for authentication
      })
        .then((res) => setFavclass(res.data))
        .catch((err) => console.error(err));
    } else {
      console.log('token problem');
    }
  };


  const gethistory = () => {
    if (token) {
      axios.get('http://localhost:3001/api/v1/classhistory', {
        headers: {'Authorization': token}
      })
        .then((res) => {
          setHistory(res.data);
        })
        .catch((err) => console.error(err));
    } else {
      console.log('token problem');
    }
  };

  useEffect(() => {
    gethistory();
    getfavor();
    getallclasses();
  }, []);

  const cancelhandle = (class_id) =>{
    axios.post('http://localhost:3001/api/v1/cancelclass', { id: class_id }, {
      headers: {'Authorization': token}
    })
      .then((res) => {
        alert('successfully cancelled');
        location.reload();
      })
      .catch((err) => console.error(err));
  };


  return (
    <div id="jb-container">
      <div id="jb-header">
        <h1>Fitness Classes</h1>
      </div>
      <div id="jb-content">
        <h2>favorite classes</h2>
        <Carousel showThumbs={false} centerMode centerSlidePercentage={33} >
          {favclass.length === 0 ? '' :
            favclass.map((data, index) => <div><ClassCard activity={data} key={index}/></div>)}
        </Carousel>
      </div>
      <div id="jb-sidebar">
        <h2>History</h2>

        {history.length === 0 ? '' :
          history.map((data, index) => {
            const today = moment(new Date()).utc().format('YYYY-MM-DD');
            const classdate = moment(data.end_date).utc().format('YYYY-MM-DD');
            if (today <= classdate) {
              return (
                <div className="wrapper">
                  <div className="box a">{data.name}</div>
                  <div className="box b" onClick={()=>{ cancelhandle(data.id); }}>Booked</div>
                </div>
              );
            } else {
              return (
                <div className="wrapper">
                  <div className="box a">{data.name}</div>
                  <div className="box c">Completed</div>
                </div>
              );
            }

          })
        }

      </div>
      <div id="jb-footer">
        { classlist.length === 0 ? '' :
          classlist.map((data, index)=> < ClassList classinfo={data} key={index}/> )
        }
      </div>
    </div>
  );
};

export default Classes;