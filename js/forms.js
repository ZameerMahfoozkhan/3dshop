/**
 * 3D Shop - Conversational Forms & WhatsApp Dispatcher
 * Validates user inputs client-side and opens pre-filled WhatsApp conversations.
 * Zero fake backend claims: clearly informs users about attaching files inside WhatsApp.
 */

document.addEventListener("DOMContentLoaded", () => {
  initCustomOrderForm();
  initPrintFileForm();
  initBusinessForm();
  initContactForm();
});

/**
 * Custom 3D Printing Enquiry Form
 */
function initCustomOrderForm() {
  const form = document.getElementById("custom-order-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const idea = form.querySelector('[name="idea"]').value.trim();
    const dimensions = form.querySelector('[name="dimensions"]').value.trim();
    const quantity = form.querySelector('[name="quantity"]').value || 1;
    const color = form.querySelector('[name="color"]').value.trim();
    const material = form.querySelector('[name="material"]').value.trim();
    const location = form.querySelector('[name="location"]').value.trim();
    const notes = form.querySelector('[name="notes"]').value.trim();

    if (!idea) {
      alert("Please enter a brief description of what you would like to make.");
      return;
    }

    const message = window.formatCustomInquiryMessage({
      name: name || (phone ? `Customer (${phone})` : "Customer"),
      idea,
      dimensions: dimensions || "Standard / To be discussed",
      quantity,
      color: color || "Any / Recommendation requested",
      material: material || "Standard PLA+ / Best suited",
      location: location || "Greater Noida / Delhi NCR",
      notes
    });

    window.openWhatsApp(message);
  });
}

/**
 * Print My 3D File Form
 */
function initPrintFileForm() {
  const form = document.getElementById("print-file-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const fileType = form.querySelector('[name="file_type"]').value;
    const purpose = form.querySelector('[name="purpose"]').value.trim();
    const dimensions = form.querySelector('[name="dimensions"]').value.trim();
    const quantity = form.querySelector('[name="quantity"]').value || 1;
    const material = form.querySelector('[name="material"]').value;
    const color = form.querySelector('[name="color"]').value.trim();
    const location = form.querySelector('[name="location"]').value.trim();
    const notes = form.querySelector('[name="notes"]').value.trim();

    const message = window.formatPrintFileMessage({
      name: name || "Customer",
      fileType: fileType || "STL",
      purpose: purpose || "Functional / Prototype",
      dimensions: dimensions || "As modeled (100% scale)",
      quantity,
      material: material || "PLA+",
      color: color || "Matte Black",
      location: location || "Greater Noida / Delhi NCR",
      notes
    });

    window.openWhatsApp(message);
  });
}

/**
 * Business & Prototyping Form
 */
function initBusinessForm() {
  const form = document.getElementById("business-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const company = form.querySelector('[name="company"]').value.trim();
    const contactPerson = form.querySelector('[name="contact_person"]').value.trim();
    const projectType = form.querySelector('[name="project_type"]').value;
    const batchSize = form.querySelector('[name="batch_size"]').value.trim();
    const material = form.querySelector('[name="material"]').value;
    const timeline = form.querySelector('[name="timeline"]').value.trim();
    const location = form.querySelector('[name="location"]').value.trim();
    const notes = form.querySelector('[name="notes"]').value.trim();

    if (!contactPerson && !company) {
      alert("Please provide your name or organization name.");
      return;
    }

    const message = window.formatBusinessMessage({
      company: company || "Independent / Startup",
      contactPerson: contactPerson || "Founder / Engineer",
      projectType,
      batchSize: batchSize || "1-10 prototype units",
      material: material || "Engineering PETG",
      timeline: timeline || "1-2 weeks",
      location: location || "Greater Noida / NCR",
      notes
    });

    window.openWhatsApp(message);
  });
}

/**
 * General Contact Form
 */
function initContactForm() {
  const form = document.getElementById("general-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim();
    const location = form.querySelector('[name="location"]').value.trim();
    const messageText = form.querySelector('[name="message"]').value.trim();

    let msg = `Hi 3D Shop, my name is ${name || "a website visitor"}.\n\n`;
    if (subject) msg += `• Subject: ${subject}\n`;
    if (location) msg += `• Location: ${location}\n`;
    if (messageText) msg += `• Message: ${messageText}\n`;
    msg += `\nLooking forward to speaking with you!`;

    window.openWhatsApp(msg);
  });
}
