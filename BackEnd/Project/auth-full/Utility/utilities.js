
function generatedOtp (){

    return Math.floor(10000 + Math.random() * 90000).toString();
}


function getotphtml(otp) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Verify Your Email</title>
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:30px 15px;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">

<tr>
<td style="background:#2563eb;padding:30px;text-align:center;">
<h1 style="margin:0;color:#ffffff;font-size:28px;">Email Verification</h1>
</td>
</tr>

<tr>
<td style="padding:40px 30px;">

<h2 style="margin-top:0;color:#1f2937;">
Hello 👋
</h2>

<p style="font-size:16px;color:#4b5563;line-height:1.7;">
Thank you for signing up. Please use the verification code below to complete your email verification.
</p>

<div style="text-align:center;margin:35px 0;">
<span style="
display:inline-block;
background:#2563eb;
color:#ffffff;
font-size:34px;
font-weight:bold;
letter-spacing:10px;
padding:18px 40px;
border-radius:10px;
">
${otp}
</span>
</div>

<p style="font-size:15px;color:#6b7280;line-height:1.7;">
This OTP is valid for <strong>10 minutes</strong>. Please do not share this code with anyone.
</p>

<p style="font-size:15px;color:#6b7280;line-height:1.7;">
If you didn't request this verification, you can safely ignore this email.
</p>

<hr style="border:none;border-top:1px solid #e5e7eb;margin:35px 0;">

<p style="font-size:14px;color:#9ca3af;text-align:center;">
Need help? Contact our support team.
</p>

</td>
</tr>

<tr>
<td style="background:#f9fafb;padding:20px;text-align:center;">
<p style="margin:0;font-size:13px;color:#9ca3af;">
© ${new Date().getFullYear()} Your Company. All Rights Reserved.
</p>
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
}


module.exports = {generatedOtp , getotphtml};
