import React from 'react';
import Button from '../components/Button'
import PropTypes from 'prop-types';
import classNames from 'classnames'

const Sort = ({ sortKey, onSort, children, activeSortKey }) => {
    const sortClass = classNames(
        'button-inline',
        { 'button-active': sortKey === activeSortKey }
    )

    return (
        <Button onClick={() => onSort(sortKey)}
            className={sortClass}>
            {children}
        </Button>
    )
}


Sort.propTypes = {
    sortKey: PropTypes.string,
    onSort: PropTypes.func,
    children: PropTypes.node
}

export default Sort