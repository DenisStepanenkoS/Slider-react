import { useEffect, useState } from 'react';
import Controller from './Controller';
import Slide from './Slide';

function Slider({cosmicData}){
    const [currentSlide, setCurrentSlide] = useState(1);
    const [dataIndex, setDataIndex] = useState(0);
    return(
        <Controller DataIndex={{dataIndex, setDataIndex}} CurrentSlide = {{currentSlide, setCurrentSlide}}>
            <Slide cosmicData={cosmicData} />
            <Slide cosmicData={cosmicData}/>
            <Slide cosmicData={cosmicData} />
        
        </Controller>
        
    );
}

export default Slider;