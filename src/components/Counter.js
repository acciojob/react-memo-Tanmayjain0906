import React,{useState} from 'react';

const Count = () => {

    const[count,setCount] = useState(0);
    return (
        <div className='Count'>
            <div>
                <p id='incr-cnt' style={{display:"inline"}}>Count :{count}</p>
                <button id='incr-btn' onClick={()=>{setCount(count+1)}}>{count}</button>
                <br></br>
                <h1 id='calc'>{1000000000 + count}</h1>
            </div>
        </div>
    );
}

export default Count;