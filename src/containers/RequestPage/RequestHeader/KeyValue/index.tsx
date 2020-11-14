import React from 'react'
import './style.css';


const KeyValue = ({ name, value }: { name: string, value: string }) => (
    <div className="request-header-key-value">
        <span className="request-header-key">{name}</span>
        <span className="request-header-value">{value}</span>
    </div>
)

export default KeyValue;