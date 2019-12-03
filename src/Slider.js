import React from 'react'

function Slider({min, max, step, value, label, handleChange, measure}) {
    return <div>
        <label>
            {label}: {min}
        <input
            type="range"
            min={min} max={max}
            value={value}
            onChange={handleChange}
            step={step}/>
            {max} &nbsp;
            <b>{value} {measure}</b>
        </label>
    </div>
}

export default Slider


