import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../FontAwesomeIcons/FontAwesomeIcons';
import './NPFFooter.css'

const NPFFooter = ({
  buttons = 'prev',
  previousButton = () => {},
  nextButton =  () => {},
  backType = 'button',
  nextType = 'button'
}) => {
  const footerButtons = () => {
    if (buttons === 'prev') {
      return (
        <button className='NPFFooter__previous' onClick={previousButton}>
          <FontAwesomeIcon className='NPFFooter__left-arrow' icon="angle-left" />
          <span>PREVIOUS</span>
        </button>
      )
    } if (buttons === 'next') {
      return (
        <>
          <button className='NPFFooter__next' onClick={nextButton}>
            <span>NEXT</span>
            <FontAwesomeIcon className='NPFFooter__right-arrow' icon="angle-right" />
          </button>
        </>
      )
    } if (buttons === 'prevNext') {
      return (
        <>
          <button 
            className='NPFFooter__previous' 
            onClick={previousButton}
            type={backType}
          >
            <FontAwesomeIcon className='NPFFooter__left-arrow' icon="angle-left" />
            <span>PREVIOUS</span>
          </button>

          <button 
            className='NPFFooter__next' 
            onClick={nextButton}
            type={nextType}
          >
            <span>NEXT</span>
            <FontAwesomeIcon className='NPFFooter__right-arrow' icon="angle-right" />
          </button>
        </>
      )
    } else {
      return <div />
    }
  }

  return (
    <footer className='NPFFooter'>
      {footerButtons()}
    </footer>
  )
}

export default NPFFooter