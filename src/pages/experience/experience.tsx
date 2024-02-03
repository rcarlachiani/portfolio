import { useContext } from "react"
import { ContainerFlex, Title } from "../../styles/globalStyles"
import { theme } from "../../theme/theme"
import { DeviceContext, LanguageContext } from "../../context/context"
import { TitlesEN, TitlesES } from "../../translation/translation"
import Project from "./project"
import data from '../../projects/projects.json'
import { SliderWrapper } from "./projectStyles"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Experience = () => {
    const language = useContext(LanguageContext);
    const { isMobile, isTablet } = useContext(DeviceContext);

    return (
        <ContainerFlex
            flexdirection='column' 
            height='inherit' 
            width='inherit' 
            justifycontent='center'
            alignitems='center'
        >
            <Title
                color={theme.colors.purpleWhite} 
                fontSize='25px'
                fontsizesm='28px'
                fontsizemd='35px'
                fontsizelg='45px'
                fontsizexl="3.4vw"
                textalign='center'
                padding='0 8vw'
                filter={theme.shadows.mainShadow}
                dangerouslySetInnerHTML={{__html: language === 'en' ? TitlesEN.projects : TitlesES.projects }}
            />
            <SliderWrapper>
                <Swiper
                    // autoplay={{
                    //     delay: 3000,
                    //     pauseOnMouseEnter: true,
                    // }}
                    autoplay={false}
                    spaceBetween={isTablet ? '20px' : '0px'}
                    slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
                    grabCursor={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {data.projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <Project projectData={project}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SliderWrapper>
        </ContainerFlex>
    )
}

export default Experience