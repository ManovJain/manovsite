import React from "react";
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opactity: 1, from: {opactiy: 0}});

    return(
        <animated.div className="m-card-info" style={style}>
            <p className="m-card-title">{props.title}</p>
            <p className="m-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer"></a>
        </animated.div>
    );
    
}


export default CardInfo;