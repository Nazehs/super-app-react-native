import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const MyComponent = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.myModule.value);

    return (
        <div>
            <p>Value: {value}</p>
            <button onClick={() => dispatch(increment(10))}>Dispatch Action</button>
        </div>
    );
};

export default MyComponent;
