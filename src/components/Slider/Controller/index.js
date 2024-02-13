import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './css/styles.module.css';

function Controller({children, CurrentSlide, DataIndex}){

    const {currentSlide, setCurrentSlide} = CurrentSlide;
    const {dataIndex, setDataIndex} = DataIndex;

    const [prevSlide, setPrevSlide] = useState(null);
    const [animationIsFinish, setAnimationIsFinish] = useState(true);


    const [decAnimation, apiDecAnimation]= useSpring(()=>({
        from:{width:'100%'},
    }))
    const [incAnimation, apiIncAnimation]= useSpring(()=>({
        from:{width:'0%'},
    }))
    const animation = ()=>{
        setAnimationIsFinish(false);

        apiDecAnimation.start({
            from: {
                width: '100%',
            },
            to: {
                width: '0%',
            },
            
        })
        apiIncAnimation.start({
            from:{
                width:'0%',
            },
            to:{
                width:'100%',
            },
            onRest: () => {
                setAnimationIsFinish(true);
            }
        })
    }
    const handleRightButton = ()=>{
        if(!animationIsFinish)
            return null;
        
        setPrevSlide(currentSlide);
        setCurrentSlide((currentSlide + 1)%3);
        setDataIndex(dataIndex + 1);
        animation();
    }
    function handleLeftButton(){
        if(!animationIsFinish)
            return null;

        setPrevSlide(currentSlide);
        setCurrentSlide((currentSlide - 1 + 3)%3);
        setDataIndex(dataIndex - 1);
        animation();
    }

    const selectAnimation = (index)=>{
        if(currentSlide === index)
            return incAnimation;
        if(prevSlide === index)
            return decAnimation;
        return {width: '0%'};
    }
    
    

    function newChildrenMap(child, index){

        function selectDataIndex(){
            
            if(index === 0)
                return {dataIndex: dataIndex -1};
            if(index === 2)
                return {dataIndex: dataIndex +1}
            return {dataIndex: dataIndex};

        }

        if(currentSlide === 2)
            return(<animated.div key={index}  style={selectAnimation((index+1)%3)}>{React.cloneElement(children[(index+1)%3],selectDataIndex())}</animated.div>
        ); 
        if(currentSlide === 0)
            return(<animated.div key={index}   style={selectAnimation((index-1+3)%3)}>{React.cloneElement(children[(index-1+3)%3],selectDataIndex())}</animated.div>
        );

        return (
        <animated.div  key={index} style={selectAnimation(index)}>{React.cloneElement(children[index],selectDataIndex())}</animated.div>
        );    
    }   
    
    return (
        <div className={styles.controller}>
            {children.map((child, index) => newChildrenMap(child, index))}
            <button className={styles.leftButton + ' ' + styles.buttons}  onClick={()=>handleLeftButton()}>{'<'}</button>
            <button className={styles.rightButton + ' ' + styles.buttons} onClick={()=>handleRightButton()} >{'>'}</button>
            
        </div>
    );
}


export default Controller;