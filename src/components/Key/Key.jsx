import React from 'react'
import PropTypes from 'prop-types'
import './Key.css'

const Key = ({ keyAction, keyType, keyValue }) => {
    console.log(keyType)
    return (
        <div className={`key-container ${keyType}`}>
            <p className='key-value'>
                {keyValue}
            </p>

        </div>
    )
}

Key.propTypes = {
    keyAction: PropTypes.func.isRequired,
    keyType: PropTypes.string.isRequired,
    keyValue: PropTypes.string.isRequired
}

export default Key