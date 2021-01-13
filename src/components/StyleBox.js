import React from 'react';

const StyleBox = (props) => {

const style = {
    backgroundColor: `${props.bgColor}`,
    height: `${props.size}`,
    width: `${props.size}`,

}

    return (
        <div>
        <div style={style}>
            <br/>
        </div>
        </div>
    );
}

export default StyleBox;