import { ContainerFlex } from "../../styles/globalStyles"
import Lottie from "lottie-react";
import scrollanimationData from '../../assets/scroll-animation.json';
import swipeAnimationData from '../../assets/swipe-animation.json';
import { useContext } from "react";
import { DeviceContext } from "../../context/context";

const SwipeAnimation = () => {
    const { isMobile } = useContext(DeviceContext)

    return (
        <>
         <ContainerFlex 
                position='fixed' 
                bottom='0'
                padding='10px 0px'
                height={isMobile ? '80px' : '60px'}
                justifycontent='center'
                zindex={1}
              >
                <Lottie 
                  animationData={isMobile ? swipeAnimationData : scrollanimationData} 
                  loop={true}
                />
              </ContainerFlex>
        </>
    )
};

export default SwipeAnimation;