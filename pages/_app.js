import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Provider } from 'react-redux';
import store from '../app/store';
import Footer from '../components/Footer';



function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    {pageProps.isLoginOrSignupPage === true ? null :  <Navbar></Navbar>}
    <Component {...pageProps} />
    <Footer></Footer>
  </Provider>
}

export default MyApp
