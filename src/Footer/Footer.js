import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../FontAwesomeIcons/FontAwesomeIcons'
import './Footer.css'

const Footer = () => {
    return (
       <footer>
            <section>
                <h2>Connect</h2>
                <p>
                    <a href='mailto:veronautfashion@gmail.com' target='_blank' rel="noopener noreferrer" >veronautfashion@gmail.com</a>
                </p>
            </section>
            <div>
                <a href='https://www.instagram.com/veronautfashion/'>
                    <FontAwesomeIcon icon={['fab', 'instagram']} size='lg'/>
                </a>
            </div>
            <form>
                <p>
                    Love facts?  Put your email address here and we'll send you some! 
                </p>

                <fieldset>
                    <label htmlFor='email-signup'>Email</label>
                    <input type='text' name='email-signup' id='email-signup'></input>
                    <button>Submit</button>
                </fieldset>

            </form>
       </footer>
    )
}

export default Footer