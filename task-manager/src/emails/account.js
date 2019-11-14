const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'ron@rapitec.co.il',
    from: 'ron@rapitec.co.il',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})