/**
 * TEK10 — Contact Form & WhatsApp Integration
 * Features:
 * 1. Web3Forms email delivery configuration
 * 2. Client-side input validation and anti-spam protection
 * 3. Loading, Success, and Error states
 * 4. Dynamic WhatsApp message generator pre-filling form details
 */

// ==========================================================================
// CONFIGURATION
// 1. Create a free account at https://web3forms.com
// 2. Generate an Access Key pointing to: swapnilshinde33777@gmail.com
// 3. Paste your Access Key below between the quotes:
// ==========================================================================
const WEB3FORMS_ACCESS_KEY = "PASTE_ACCESS_KEY_HERE";

// Official WhatsApp contact number (international format without + or spaces)
const WHATSAPP_PHONE_NUMBER = "919579119759";

(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  const statusBox = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const whatsappBtn = document.getElementById('whatsappBtn');

  if (!form) return;

  /**
   * Display status feedback to user
   */
  function showStatus(type, message) {
    if (!statusBox) return;
    statusBox.className = `form-status ${type}`;
    statusBox.textContent = message;
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /**
   * Validate standard email pattern
   */
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  /**
   * Build pre-filled WhatsApp link from current form inputs
   */
  function generateWhatsAppUrl() {
    const name = (document.getElementById('name')?.value || '').trim();
    const company = (document.getElementById('company')?.value || '').trim();
    const projectType = (document.getElementById('project_type')?.value || '').trim();
    const phone = (document.getElementById('phone')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const message = (document.getElementById('message')?.value || '').trim();

    let text = `Hello TEK10,\nI would like to discuss a technology project.`;
    if (name) text += `\n\nName: ${name}`;
    if (company) text += `\nCompany: ${company}`;
    if (projectType) text += `\nProject Type: ${projectType}`;
    if (phone) text += `\nPhone: ${phone}`;
    if (email) text += `\nEmail: ${email}`;
    if (message) text += `\n\nMessage:\n${message}`;

    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  /**
   * Handle "Continue on WhatsApp" direct button click
   */
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = generateWhatsAppUrl();
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  /**
   * Handle Web3Forms submission
   */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot spam check
    const botcheck = form.querySelector('input[name="botcheck"]');
    if (botcheck && botcheck.checked) {
      console.warn('Bot submission blocked');
      return;
    }

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // Validation
    if (!name) {
      showStatus('error', 'Please enter your name.');
      nameInput?.focus();
      return;
    }

    if (!email || !isValidEmail(email)) {
      showStatus('error', 'Please enter a valid email address.');
      emailInput?.focus();
      return;
    }

    if (!message) {
      showStatus('error', 'Please tell us about your project or problem.');
      messageInput?.focus();
      return;
    }

    // Check if key is configured
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'PASTE_ACCESS_KEY_HERE') {
      console.warn('Web3Forms Access Key is not configured yet.');
      showStatus(
        'error',
        'Web3Forms access key is not set yet in js/contact.js. Please contact swapnilshinde33777@gmail.com directly or continue on WhatsApp.'
      );
      return;
    }

    // Set UI to loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending Enquiry...';
    showStatus('', '');

    try {
      const formData = new FormData(form);
      formData.set('access_key', WEB3FORMS_ACCESS_KEY);
      formData.set('subject', `New TEK10 Project Enquiry from ${name}`);
      formData.set('from_name', 'TEK10 Inbound System');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showStatus('success', "Your enquiry has been sent. We'll get back to you.");
        form.reset();
      } else {
        throw new Error(result.message || 'Submission error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      showStatus(
        'error',
        'Something went wrong. Please try again or contact us directly at swapnilshinde33777@gmail.com / +91 95791 19759.'
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
})();

