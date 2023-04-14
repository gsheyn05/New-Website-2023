import sendgrid from "@sendgrid/mail";

if (process.env.NEXT_PUBLIC_SEND_GRID_API) { //TypeScript brother
    sendgrid.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID_API);
}

async function sendEmail(req: { body: { subject: any; fullname: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: any; }): any; new(): any; }; }; }) {
    //Eh way but works so okay

  try {
    await sendgrid.send({
      to: "gregory.sheyn@gmail.com", // Your email where you'll receive emails
      from: "gregory.sheyn@gmail.com", // your website email address here
      subject: `[Contact from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Someone tried to contact you from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px; font-weight: bold;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Gregory Sheyn<br>Software Developer</p>
              
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
     console.log(error);
   // return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;