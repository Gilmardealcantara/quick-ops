import React from 'react';
import './style.css';

const ReceiptAttachment = () => {
    return (
        <div className="receipt-attach">
            <div>
                <span className="receipt-title">Envie o comprovante</span>
                <span className="receipt-desc">Você pode inserir arquivos nos formatos PNG, JPG ou PDF. Tamanho máx: 10MB</span>

                <button className="receipt-button" onClick={() => document.getElementById('file')?.click()}>
                    <i className="fas fa-filter"></i>
                    <span>Escolher arquivo</span>
                </button>
                <input type="file" style={{ display: "none" }} id="file" name="file" />
            </div>
        </div>
    );
}

export default ReceiptAttachment;