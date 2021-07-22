import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </>
}

export default MyApp
