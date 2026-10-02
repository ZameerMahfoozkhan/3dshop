/**
 * 3D Shop - Centralized WhatsApp Integration
 * Single source of truth for WhatsApp contact & pre-filled message generation.
 */

const WHATSAPP_CONFIG = {
  // Centralized WhatsApp Number (Country code + 10 digits without '+' or spaces)
  rawNumber: "919871234567",
  formattedNumber: "+91 98712 34567",
  email: "orders@3dshop.in",
  location: "Greater Noida, Uttar Pradesh, India",
  serviceNote: "Greater Noida & NCR local priority | Pan-India delivery"
};

/**
 * Builds the official wa.me direct chat link
 * @param {string} text - Message to pre-fill
 * @returns {string} - Full WhatsApp URL
 */
function createWhatsAppUrl(text) {
  const cleanMessage = (text || "").trim();
  return `https://wa.me/${WHATSAPP_CONFIG.rawNumber}?text=${encodeURIComponent(cleanMessage)}`;
}

/**
 * Opens WhatsApp in a new tab/app safely
 * @param {string} text - Message to pre-fill
 */
function openWhatsApp(text) {
  const url = createWhatsAppUrl(text);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Formats a clean, structured product order message
 * @param {Object} details
 * @returns {string}
 */
function formatProductOrderMessage({ id, name, price, quantity, color, location, notes }) {
  let msg = `Hi 3D Shop team, I would like to order from your ready-made catalog:\n\n`;
  msg += `• Product: ${name}\n`;
  msg += `• Product ID: ${id}\n`;
  msg += `• Quantity: ${quantity || 1}\n`;
  if (color) msg += `• Preferred Color: ${color}\n`;
  if (price) msg += `• Price: ₹${price * (quantity || 1)} (₹${price} each)\n`;
  if (location) msg += `• Delivery Area / City: ${location}\n`;
  if (notes) msg += `• Special Notes: ${notes}\n`;
  msg += `\nPlease let me know the estimated delivery timeframe and payment details. Thank you!`;
  return msg;
}

/**
 * Formats a custom 3D printing inquiry message
 * @param {Object} details
 * @returns {string}
 */
function formatCustomInquiryMessage({ name, idea, dimensions, quantity, color, material, location, notes }) {
  let msg = `Hi 3D Shop, I would like to request a Custom 3D Design & Print project:\n\n`;
  if (name) msg += `• Name: ${name}\n`;
  msg += `• Project Idea: ${idea || "Custom model"}\n`;
  if (dimensions) msg += `• Approx Dimensions: ${dimensions}\n`;
  msg += `• Quantity: ${quantity || 1}\n`;
  if (color) msg += `• Preferred Color: ${color}\n`;
  if (material) msg += `• Material Preference: ${material}\n`;
  if (location) msg += `• Delivery Location: ${location}\n`;
  if (notes) msg += `• Additional Details: ${notes}\n`;
  msg += `\n(I am attaching reference sketches/photos directly in this chat.)\n`;
  msg += `\nPlease review and let me know the next steps for 3D modeling and quotation.`;
  return msg;
}

/**
 * Formats a Print My 3D File inquiry message
 * @param {Object} details
 * @returns {string}
 */
function formatPrintFileMessage({ name, fileType, purpose, dimensions, quantity, color, material, location, notes }) {
  let msg = `Hi 3D Shop, I already have a 3D file and would like a print quotation:\n\n`;
  if (name) msg += `• Name: ${name}\n`;
  msg += `• File Format: ${fileType || "STL / 3MF / OBJ"}\n`;
  if (purpose) msg += `• Intended Use: ${purpose}\n`;
  if (dimensions) msg += `• Scale / Dimensions: ${dimensions}\n`;
  msg += `• Quantity: ${quantity || 1}\n`;
  if (material) msg += `• Material Required: ${material}\n`;
  if (color) msg += `• Preferred Color: ${color}\n`;
  if (location) msg += `• Delivery Area: ${location}\n`;
  if (notes) msg += `• Notes / Infill Specs: ${notes}\n`;
  msg += `\n(I am attaching the 3D file directly to this WhatsApp conversation now.)\n`;
  msg += `\nPlease inspect the model and provide your print quote and estimated turnaround.`;
  return msg;
}

/**
 * Formats a B2B / Prototyping inquiry message
 * @param {Object} details
 * @returns {string}
 */
function formatBusinessMessage({ company, contactPerson, projectType, batchSize, material, timeline, location, notes }) {
  let msg = `Hi 3D Shop Team, I am reaching out regarding a Business / Prototyping project:\n\n`;
  if (contactPerson) msg += `• Contact Person: ${contactPerson}\n`;
  if (company) msg += `• Organization / Startup: ${company}\n`;
  msg += `• Scope / Project: ${projectType || "Rapid Prototyping / Batch"}\n`;
  if (batchSize) msg += `• Batch Volume: ${batchSize}\n`;
  if (material) msg += `• Material Required: ${material}\n`;
  if (timeline) msg += `• Target Deadline: ${timeline}\n`;
  if (location) msg += `• Delivery Location: ${location}\n`;
  if (notes) msg += `• Specifications: ${notes}\n`;
  msg += `\nLooking forward to reviewing technical tolerances, volume pricing, and turnaround.`;
  return msg;
}

// Attach to window for easy cross-script access
window.WHATSAPP_CONFIG = WHATSAPP_CONFIG;
window.createWhatsAppUrl = createWhatsAppUrl;
window.openWhatsApp = openWhatsApp;
window.formatProductOrderMessage = formatProductOrderMessage;
window.formatCustomInquiryMessage = formatCustomInquiryMessage;
window.formatPrintFileMessage = formatPrintFileMessage;
window.formatBusinessMessage = formatBusinessMessage;
