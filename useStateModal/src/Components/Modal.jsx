import React from 'react'
import '../index.css'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    margin: '9% 32%',
    backgroundColor: '#000',
    width: '500px',
    height: '500px',
    borderRadius: '8px',
    color: 'white'
}

export default function Modal({ isOpen, closeModal, children }) {
    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div style={{
                        cursor: 'pointer',
                        color: 'red',
                        margin: '16px 16px 0 0',
                        width: 'fit-content',
                        float: 'right',
                        fontWeight: 'bold',
                    }} onClick={closeModal}>X</div>
                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        {children}
                    </div>
                </div>
            </div>
        )

    } return null


}
