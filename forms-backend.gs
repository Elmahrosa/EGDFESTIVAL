// === EGD2026 FORM BACKEND ===
// Deploy as Google Apps Script Web App
// 1. Go to https://script.google.com
// 2. Create new project
// 3. Paste this code
// 4. Deploy → New deployment → Web app → Execute as "Me", access "Anyone"
// 5. Copy the Web App URL → paste into register.html and sponsor-apply.html

const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Replace with your Google Sheet ID

function doPost(e) {
  try {
    const params = e.parameter;
    const type = params._type || 'registration';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    const timestamp = new Date().toISOString();
    const userEmail = params.email || '';

    // Save to sheet
    const headers = sheet.getDataRange().getValues()[0] || [];
    const row = headers.map(h => params[h] || '');
    row[0] = timestamp;
    sheet.appendRow(row);

    // Email you
    const subject = `EGD2026 — ${type === 'sponsor' ? 'Sponsor Interest' : 'New Registration'}`;
    const body = Object.entries(params)
      .filter(([k]) => !k.startsWith('_'))
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');
    MailApp.sendEmail('ayman@elmahrosa.org', subject, body);

    // Auto-reply to user
    if (userEmail) {
      const replySubject = type === 'sponsor'
        ? 'EGD2026 — Thank you for your sponsorship interest'
        : 'EGD2026 — You are registered!';
      const replyBody = type === 'sponsor'
        ? `Hi there,\n\nThank you for your interest in sponsoring EGD2026. Our partnerships team will follow up within 48 hours.\n\nBest,\nElmahrosa International\nhttps://egd2026.elmahrosa.org`
        : `Hi there,\n\nThank you for registering for EGD2026! We're excited to have you join us on September 15, 2026.\n\nNext steps and event details will be sent to this email closer to the date.\n\nBest,\nElmahrosa International\nhttps://egd2026.elmahrosa.org`;
      MailApp.sendEmail(userEmail, replySubject, replyBody);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'EGD2026 Form Backend Active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
