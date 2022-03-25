import { FaAddressCard } from 'react-icons/fa';
import Footer from '../components/Footer/Footer';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const About = () => {
  return (
    <>
      <div className="mainDivForNavigationBar">
        <NavigationBar />
      </div>
      <div>
        <span className="headerForPage">
          About
          <FaAddressCard className="logoBigSize"></FaAddressCard>
        </span>
      </div>
      <Footer />
    </>
  )
}

export default About;