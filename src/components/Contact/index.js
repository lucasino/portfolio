import { useEffect, useState,useRef  } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_e0y61ot', 'template_qvgiq5t', form.current, '-nLgvm7NWy6zQinIG')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am looking for new opportunities in my professional career and I have the availability to move to any city for new challenges. I am a proactive and committed person, and I would be interested in learning about any project where I could fit in.
          </p>
          <p>
          If you have any questions or suggestions, please do not hesitate to contact me.
          </p>
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
         <div className="info-map">
          Madrid,
          <br />
          Spain,
          <br />
          Calle Santa Brigida, 28221 <br />
          Majadahonda <br />
          <br />
          <span>lucascalbo@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[40.473562320005236, -3.8683657410019383]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.47428979020216, -3.86392699591819]}>
              <Popup>Lucas lives here, come over for a cup of coffee !</Popup>
            </Marker>
          </MapContainer>
        </div> 
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact