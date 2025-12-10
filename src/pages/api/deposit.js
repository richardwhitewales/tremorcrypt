const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    const { email, amount, fullName } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harpycryto@gmail.com',
            pass: 'nuwnibnaqbqzjhpb',
        },
    });

    const mailOptions = {
        from: 'harpycryto@gmail.com',
        to: email,
        subject: `${amount} Deposited To Your Account`,
        html: `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                  href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
                  rel="stylesheet"
                />
                <link
                  rel="shortcut icon"
                  href="https://harpycryto.com/logo.png"
                  type="image/x-icon"
                />
                <title>Tremorcrypt</title>
                <style>
                  h1,
                  h2,
                  p,
                  img {
                    margin: 0;
                    padding: 0;
                  }
                  body {
                    font-family: "Inter", sans-serif;
                    background-color: #ffffff;
                  }
                  table {
                    border-collapse: collapse;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                  }
                  td {
                    padding: 0;
                  }
                </style>
              </head>
              <body style="background-color: #ffffff; padding-bottom: 30px">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="100%"
                  style="max-width: 600px; margin: 0 auto"
                >
                  <tr>
                    <td align="center" style="padding: 30px 0">
                      <img
                        src="https://harpycryto.com/logo.png"
                        alt="logo"
                        width="141"
                        style="display: block"
                      />
                      <h1
                        style="
                          font-size: 32px;
                          font-weight: 600;
                          line-height: 1.2;
                          margin-top: 60px;
                          margin-bottom: 20px;
                        "
                      >
                        ${amount} Deposit
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px">
                      <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 10px">
                        Dear ${fullName},
                      </h2>
                      <p
                        style="
                          font-size: 16px;
                          font-weight: 400;
                          line-height: 1.5;
                          margin-bottom: 30px;
                        "
                      >
                        ${amount} Has been deposited to your Tremorcrypt account.
                      </p>
    
                      <p>
                        Best Regards, <br />
                        Tremorcrypt Team
                      </p>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
            `,
    };
    try {
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: error });
    }
}
