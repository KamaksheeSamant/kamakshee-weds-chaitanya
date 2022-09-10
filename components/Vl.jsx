import React from 'react'

const Vl = ({ color = '#daa520'}) => {
    return (
        <div className="flex flex-row justify-center mt-6 mb-6">
            <p className={`border-l-2 border-[${color}] h-16`}></p>
        </div>
    )
}

export default Vl
