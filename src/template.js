import { logos } from './logos'

const formatAmount = amount => {
  const formatNumber = new Intl.NumberFormat('en-US').format(Number(amount))
  return `$${formatNumber}`
}

const templateSource = pdfData => {
  return `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .backgroundImage {
        position: absolute;
        top: 295px;
        left: 250px;
        width: 38%;
        height: 48%;
        z-index: -1;
      }

      .image {
        width: 7vw;
        height: 3vh;
        /* color: #fff; */
        /* font-weight: 600; */
      }

      .label {
        font-size: 18px;
        margin-bottom: 6px;
        color: #444;
      }

      .cudiumText {
        color: #fff;
        font-size: 22px;
        font-weight: 700;
        padding-bottom: 3px
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2vh 3vh;
        height:7vh;
        background-color: #88cff0;
        overflow: hidden;
      }

      .class2 {
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        gap: .5vw;
      }

      .class3 {
        gap: 4vw;
      }
    </style>
  </head>
  <body>
    <img src=${logos.bg} class="backgroundImage" />
    <div>
      <div class="header">
        <div class="class2">
          <img src=${logos.header} class="image" />
          <p class="cudiumText">Cudium</p>
        </div>

        <div class="class3">
          <img
            src=${logos.bg}
            style="
              width: 30%;
              height: 55%;
              position: relative;
              top: 60px;
              left: 90px;
            "
          />

          <img
            src=${logos.bg}
            style="
              width: 30%;
              height: 55%;
              position: relative;
              top: 60px;
              left: 120px;
            "
          />
        </div>

        <p style="color: #fff; font-size: 22px; font-weight: 700">Receipt</p>
      </div>

      <div style="margin: 0 110px">
        <div
          style="
            margin-top: 40px;
            background-color: lightblue;
            border-radius: 5px;
            padding: 2px 7px;
            display: flex;
            flex-direction: row;
            align-items: center;
            width: max-content;
          "
        >
          <p style="color: blue; font-size: 16px; padding-bottom:3px">
            International Wire
          </p>
        </div>

        <div style="padding-top: 10px">
          <p style="font-size: 30px; font-weight: bolder">
            ${formatAmount(pdfData.EnterAmount)}
          </p>
        </div>

        <div style="padding-top: 10px">
          <p style="font-size: 18px; color: #444">${pdfData.date}</p>
        </div>

        <div style="padding-top: 18px">
          <p class="label">Recipient Name</p>
          <p style="font-size: 22px; font-weight:500">${
            pdfData.RecipientName
          }</p>
        </div>

        <div style="padding-top: 18px">
          <p class="label">SWIFT Code</p>
          <p style="font-size:22px; font-weight:500">${pdfData.SwiftCode}</p>
        </div>

        <div style="border-bottom: 1px solid #bbb; padding-top: 18px; padding-bottom: 15px">
          <p class="label">Account Number</p>
          <p style="font-size:22px; font-weight:500">${
            pdfData.AccountNumber
          }</p>
        </div>

        <div
          style="
            padding-top: 18px;
            border-bottom: 1px solid #bbb;
            padding-bottom: 15px;
          "
        >
          <p class="label">Sender Name</p>
          <p style="font-size: 22px; font-weight:500">${pdfData.SenderName}</p>
        </div>

        <div style="padding-top: 18px; border-bottom: 1px solid #bbb; padding-bottom:15px">
          <p class="label">Memo</p>
          <p style="font-size:22px; font-weight:500"${pdfData.Memo}</p>
        </div>

        <div style="padding-top: 18px">
          <p style="font-size: 22px; color: blue">Breakdown</p>
        </div>

        <div style="padding-top: 15px; gap: 6px">
          <p style="font-size: 18px; color: #444; margin-bottom:6px">Status</p>
          <p style="font-size:22px; color: green">Successful</p>
        </div>

        <div style="padding-top: 18px; gap: 6px">
          <p style="font-size: 18px; color: #444; margin-bottom:6px">Amount</p>
          <p style="font-size: 22px; font-weight:500">${formatAmount(
            pdfData.EnterAmount
          )}</p>
        </div>

        <div style="padding-top: 18px; gap: 6px">
          <p style="font-size: 18px; color: #444; margin-bottom:6px">Recipient Name</p>
          <p style="font-size: 22px; font-weight:500">${
            pdfData.RecipientName
          }</p>
        </div>
      </div>
    </div>
  </body>
</html>`
}

export default templateSource
