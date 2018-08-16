import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';

const Loading = () =>
    <FontAwesomeIcon icon={faSpinner} className="fa-spin" />

export default Loading