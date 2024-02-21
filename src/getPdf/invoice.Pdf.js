import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer'
import '../CreateInvoice/InvoiceForm'
import headerLogo from './logo.png'
import backgroundImg from './logo5.png'

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 220,
    left: 160,
    width: '50%',
    height: '30%',
    zIndex: -1,
  },

  image: {
    width: 40,
    height: 30,
    color: 'white',
    fontWeight: 600,
  },

  label: {
    fontSize: 10,
    marginBottom: 7,
    color: '#aaa',
  },
  input: {
    fontSize: 12,
    marginBottom: 6,
    paddingBottom: 5,
  },
})

const InvoicePDF = ({ billFrom, inputValue }) => {
  return (
    <Document>
      <Page size='A4' style={{ flexDirection: 'column', maxHeight: '80vh' }}>
        <Img src={backgroundImg} style={styles.backgroundImage} />

        <div>
          <div class='class1'>
            <div class='class2'>
              <Img src={headerLogo} style={styles.image} />
              <p style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>
                Cudium
              </p>
            </div>

            <div class='class3'>
              <Img
                src={backgroundImg}
                style='width: 35%
                  height: 35%
                  position: relative
                  top: 50
                  left: 40'
              />
              <Img
                src={backgroundImg}
                style='width: 35%
                  height: 35%
                  position: relative
                  top: 50
                  left: 30'
              />
            </div>

            <p style=' color: #fff font-size: 12 font-weight: 600'>Receipt</p>
          </div>

          <div style='margin-horizontal: 110'>
            <div
              style='margin-top: 40
                background-color: lightblue
                border-radius: 30
                padding-horizontal: 2
                padding-vertical: 2
                align-items: center
                width: 20%'
            >
              <p style='color: blue fontSize: 7 width: auto'>
                International Wire
              </p>
            </div>

            <div style='paddingTop: 10'>
              <p style='fontSize: 20 fontWeight: 900'>{billFrom.EnterAmount}</p>
            </div>

            <div style='paddingTop: 10'>
              <p style='fontSize: 12 color: #aaa'>{billFrom.date}</p>
            </div>

            <div style='paddingTop: 15 '>
              <p style={styles.label}>Recipient Name</p>
              <p style='fontSize: 14 '>{billFrom.RecipientName}</p>
            </div>

            <div style='paddingTop: 15'>
              <p style={styles.label}>SWIFT Code</p>
              <p style={styles.input}>{billFrom.SwiftCode}</p>
            </div>

            <div
              style='borderBottomWidth: 1
                borderBottomColor: #bbb'
            >
              <p style={styles.label}>Account Number</p>
              <p style={styles.input}>{billFrom.AccountNumber}</p>
            </div>

            <div
              style='paddingTop: 15
                borderBottomWidth: 1
                paddingBottom: 12
                borderBottomColor: #bbb'
            >
              <p style={styles.label}>Sender Name</p>
              <p style='fontSize: 14'>{billFrom.SenderName}</p>
            </div>

            <div
              style=' paddingTop: 15
                borderBottomWidth: 1
                borderBottomColor: #bbb'
            >
              <p style={styles.label}>Memo</p>
              <p style={styles.input}>{billFrom.Memo}</p>
            </div>

            <div style='paddingotop: 15 '>
              <p style='fontSize: 12 color: blue'>Breakdown</p>
            </div>

            <div style='padding-top: 15, gap: 6'>
              <p style='fontSize: 12 color: #aaa'>Status</p>
              <p style='fontSize: 12 color: green'>Successful</p>
            </div>

            <div style='padding-top: 15, gap: 6 '>
              <p style='fontSize: 12 color: #aaa'>Amount</p>
              <p style='fontSize: 14'>{billFrom.EnterAmount}</p>
            </div>

            <div style='paddingTop: 15, gap: 6'>
              <p style=' fontSize: 12, color: #aaa'>Recipient Name</p>
              <p style='fontSize: 14'>{billFrom.RecipientName}</p>
            </div>
          </div>
        </div>
      </Page>
    </Document>
  )
}

export default InvoicePDF
