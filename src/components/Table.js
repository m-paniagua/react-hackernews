import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';
import Sort from './Sort'
import Button from './Button'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown'
// import faArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp'

const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse()
}

class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortKey: 'NONE',
            isSortReversed: false,
        }

        this.onSort = this.onSort.bind(this)
    }

    onSort(sortKey) {
        const isSortReversed = this.state.sortKey === sortKey && !this.state.isSortReversed

        this.setState({ sortKey, isSortReversed })
    }

    render() {
        const { list, onDismiss } = this.props
        const { sortKey, isSortReversed } = this.state

        const sortedList = SORTS[sortKey](list)
        const reverseSortedList = isSortReversed ? sortedList.reverse() : sortedList

        return (
            <div className='table'>
                <div className="table-header">
                    <span style={{ width: '40%' }}>
                        <Sort
                            sortKey={'TITLE'}
                            onSort={this.onSort}
                            activeSortKey={sortKey}
                        >
                            Title
                        </Sort>
                    </span>
                    <span style={{ width: '30%' }}>
                        <Sort
                            sortKey={'AUTHOR'}
                            onSort={this.onSort}
                            activeSortKey={sortKey}
                        >
                            Author
                        </Sort>
                    </span>
                    <span style={{ width: '10%' }}>
                        <Sort
                            sortKey={'COMMENTS'}
                            onSort={this.onSort}
                            activeSortKey={sortKey}
                        >
                            Comments
                        </Sort>
                    </span>
                    <span style={{ width: '10%' }}>
                        <Sort
                            sortKey={'POINTS'}
                            onSort={this.onSort}
                            activeSortKey={sortKey}
                        >
                            Points
                        </Sort>
                    </span>
                    <span style={{ width: '10%' }}>
                        Archive
                    </span>
                </div>
                {reverseSortedList.map(item =>
                    <div key={item.objectID} className='table-row'>
                        <span style={{ width: '40%' }}>
                            <a href={item.url} target="_blank">{item.title}</a>
                        </span>
                        <span style={{ width: '30%' }}>{item.author}</span>
                        <span style={{ width: '10%' }}>{item.num_comments}</span>
                        <span style={{ width: '10%' }}>{item.points}</span>
                        <span style={{ width: '10%' }}>
                            <Button
                                onClick={() => onDismiss(item.objectID)}
                                className='button-inline'
                            >
                                Dismiss
                        </Button>
                        </span>
                    </div>
                )}
            </div>
        )
    }
}


Table.propTypes = {
    list: PropTypes.array.isRequired,
    onDismiss: PropTypes.func,
    sortKey: PropTypes.string,
    onSort: PropTypes.func,
    isSortReversed: PropTypes.bool
}

export default Table