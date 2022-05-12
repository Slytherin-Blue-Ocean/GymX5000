import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useAuth} from '../context/Auth.jsx';
import styled from 'styled-components';

import TempCard from '../subcomponents/TempCard.jsx';



const Exercise = ({ activity }) => {
  const { token } = useAuth();

};

export default Exercise;