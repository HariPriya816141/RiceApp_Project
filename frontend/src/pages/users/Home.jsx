import {useEffect} from 'react';
import HomeCarousel from '../../components/home/HomeCarousel';
import CountRow from '../../components/home/CountRow';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMain from '../../components/about/AboutMain';
import TimeLineHorizontal from '../../components/home/TimeLineHorizontal';
import FlashDeal from '../../components/shop/FlashDeal';
import ShopCarousel from '../../components/shop/ShopCarousel';
import '../../styles/shopCarousel.css'; 
import "../../styles/flashdeal.css";
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
  <div>
    <HomeCarousel/>
    <AboutMain/>
    <TimeLineHorizontal/>
    <CountRow/>
     <FlashDeal onShopClick={() => navigate('/shop?scrollTo=product')} />
     <ShopCarousel/>
    
    
    </div>
  );
};

export default Home;

