export const environment = {
  production: false,
  serviceId: process.env['EMAIL_SERVICE_ID'] || '',
  templateId: process.env['EMAIL_TEMPLATE_ID'] || '',
  publicKey: process.env['EMAIL_PUBLIC_KEY'] || '',
};
