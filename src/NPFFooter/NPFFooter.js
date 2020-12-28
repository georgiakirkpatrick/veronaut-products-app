import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import './NPFFooter.css'

const NPFFooter = props => {
    const buttons = () => {
        if (props.buttons === 'prev') {
            return (
                <button className='NPFFooter_previous' onClick={props.previousButton}>
                    <FontAwesomeIcon className='NPFFooter_arrow' icon="arrow-left" />
                    <span>PREVIOUS</span>
                </button>
            )
        } if (props.buttons === 'next') {
            return (
                <>
                <div />
                <button className='NPFFooter_next' onClick={props.nextButton}>
                    <span>NEXT</span>
                    <FontAwesomeIcon className='NPFFooter_arrow' icon="arrow-right" />
                </button>
                </>
            )
        } if (props.buttons === 'prevNext') {
            return (
                <>
                    <button className='NPFFooter_previous' onClick={props.previousButton}>
                        <FontAwesomeIcon className='NPFFooter_arrow' icon="arrow-left" />
                        <span>PREVIOUS</span>
                    </button>
                    <button className='NPFFooter_next' onClick={props.nextButton}>
                        <span>NEXT</span>
                        <FontAwesomeIcon className='NPFFooter_arrow' icon="arrow-right" />
                    </button>
                </>
            )
        } else {
            return <div />
        }
    }

    return (
        <footer className='NPFFooter'>
            {buttons()}
        </footer>
    )
}

export default NPFFooter