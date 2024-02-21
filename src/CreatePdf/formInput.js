import React, { useState } from 'react'
import './style.css'
import logo from './icons8-info.svg'
import CurrencyInput from 'react-currency-input-field'
import html2pdf from 'html2pdf.js'
import templateSource from '../template'

const InvoiceForm = () => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const [loading, setLoading] = useState(false)
  const [billFrom, setBillFrom] = useState({
    AccountNumber: '',
    SwiftCode: '',
    RecipientName: '',
    SenderName: '',
    EnterAmount: '',
    Memo: '',
    date: new Date().toLocaleDateString('en-US', options),
  })

  const handleBillFromData = e => {
    e.preventDefault()
    const { name, value } = e.target

    setBillFrom({
      ...billFrom,
      [name]: value,
    })
  }

  const downloadPDF = async e => {
    e.preventDefault()
    console.log('data', billFrom)
    if (loading) return
    setLoading(true)
    const container = templateSource(billFrom)
    const pdfFileName = `Payment Receipt.pdf`
    const format = 'A4'
    const orientation = 'portrait'

    try {
      await html2pdf()
        .from(container)
        .set({
          margin: 0,
          filename: pdfFileName,
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format, orientation },
        })
        .save(pdfFileName)
      setLoading(false)
    } catch (error) {
      console.error('PDF generation error:', error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='invoice'>
      <div className='container'>
        <div className='titleContainer'>
          <img
            width='40'
            height='40'
            src='https://img.icons8.com/ultraviolet/40/details-popup.png'
            alt='details-popup'
          />
          <h1 className='title'>
            Payment information <br />
            <span style={{ fontSize: '13px' }}>
              Provide your details for payment
            </span>
          </h1>
        </div>
        <form onSubmit={downloadPDF}>
          <div className='firstRow'>
            <div className='inputName'>
              <label>Account Number</label>
              <input
                name='AccountNumber'
                className='input'
                type='text'
                value={billFrom.AccountNumber}
                onChange={handleBillFromData}
                placeholder='0002304312'
              />
            </div>

            <div className='inputName'>
              <label>Swift Code</label>
              <input
                name='SwiftCode'
                className='input'
                type='text'
                value={billFrom.SwiftCode}
                onChange={handleBillFromData}
                placeholder='Swift code'
              />
            </div>

            <div className='inputName'>
              <label>Recipient's name</label>
              <input
                name='RecipientName'
                className='input'
                type='text'
                value={billFrom.RecipientName}
                onChange={handleBillFromData}
                placeholder="Recipient's name"
              />
            </div>

            <div className='inputName'>
              <label>Sender's name</label>
              <input
                name='SenderName'
                className='input'
                type='text'
                value={billFrom.SenderName}
                onChange={handleBillFromData}
                placeholder="Sender's name"
              />
            </div>

            <div className='inputName'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  marginTop: 10,
                }}
              >
                <label>Enter Amount</label>
                <img
                  src={logo}
                  style={{ height: 15, marginTop: 4 }}
                  alt='Logo'
                />
              </div>
              {/* <input
                name='EnterAmount'
                className='input'
                type='number'
                value={billFrom.EnterAmount}
                onChange={handleBillFromData}
                placeholder='$0.00'
              /> */}
              <CurrencyInput
                name='EnterAmount'
                className='input'
                placeholder='0.00'
                prefix='$'
                defaultValue={0}
                decimalsLimit={2}
                onValueChange={value =>
                  setBillFrom({
                    ...billFrom,
                    EnterAmount: value,
                  })
                }
              />
            </div>

            <div className='inputName'>
              <div
                style={{
                  display: 'flex',
                  gap: 5,
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <label>Memo</label>
                <img
                  src={logo}
                  style={{ height: 15, marginTop: 4 }}
                  alt='Logo'
                />
              </div>

              <input
                name='Memo'
                className='input'
                type='text'
                value={billFrom.Memo}
                onChange={handleBillFromData}
                placeholder='Memo'
              />
            </div>
          </div>
          <button className='button'>
            {loading ? 'Generating...' : 'Generate Receipt'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default InvoiceForm
