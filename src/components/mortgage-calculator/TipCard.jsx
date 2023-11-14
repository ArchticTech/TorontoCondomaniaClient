import React from 'react'

const TipCard = ({icon, span, para}) => {
    return (
        <div className="card mt-5">
            <i className={icon}></i>
            <p>
                <span className="bold">{span} :</span>
                {para}
            </p>
        </div>
    )
}

export default TipCard