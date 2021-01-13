import React, {useState} from 'react';
import StyleBox from "../components/StyleBox";

const Boxgen = () => {     
    const [boxState, setBox] = useState({
                color: "",
                size: "",
                box: [],
})
const onChangeHandler = event => {
    setBox({
        ...boxState,
        [event.target.name]: event.target.value,
    });
}
    const onSubmitHandler = event => {
        event.preventDefault();
        let size = boxState.size + "px";
        let color = boxState.color;
        setBox({
            ...boxState,
            "box": [...boxState.box, {"color": color, "size": size}]
        })
        event.target.reset()
        console.log(boxState)
    }


        return(
            <div>
                <form onSubmit={ onSubmitHandler }>
                    <label>Color </label>
                    <input name="color" type="text" onChange={ onChangeHandler}></input>
                    <label>Size </label>
                    <input name="size" type="text" onChange={ onChangeHandler}></input>
                    <input  type="submit"/>
                </form>
                <div>
                    {boxState.box.map((item, i) => 
                        <StyleBox key={i} size={item.size} bgColor={item.color}/>
                )}
                </div>
            </div>
        );
    }

export default Boxgen;