from html import escape
import logging
import os

logger = logging.getLogger(__name__)

# Email configuration - Resend API
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
EMAIL_FROM = os.getenv("EMAIL_FROM", "Petraslynn LLC <onboarding@resend.dev>")
EMAIL_ENABLED = bool(RESEND_API_KEY)

BUSINESS_NAME = "PETRASLYNN LLC"
BUSINESS_LOCATION = "AURORA, CO"
NAVY = "#0e1835"
COPPER = "#e87a1a"


def send_email(to_email: str, subject: str, html_body: str, reply_to: str = None) -> bool:
    if not EMAIL_ENABLED:
        logger.info(f"Email disabled. Would send to {to_email}: {subject}")
        return True

    try:
        import httpx

        payload = {
            "from": EMAIL_FROM,
            "to": [to_email],
            "subject": subject,
            "html": html_body,
        }
        if reply_to:
            payload["reply_to"] = reply_to
        response = httpx.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            json=payload,
            timeout=10,
        )
        response.raise_for_status()
        logger.info(f"Email sent to {to_email}: {subject}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {e}")
        return False


def _e(value) -> str:
    """Escape user-submitted text before it goes into an email's HTML."""
    return escape(str(value)) if value else ""


def _details(rows: list[tuple[str, str]]) -> str:
    return "".join(
        f"<p><strong>{label}:</strong> {_e(value)}</p>" for label, value in rows if value
    )


def _layout(heading: str, body: str, header_tagline: str = "LAWN CARE & LANDSCAPING", reference: str = None) -> str:
    ref_html = f'<div class="ref">REF · {_e(reference)}</div>' if reference else ""
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Helvetica Neue', Arial, sans-serif; background: #f0f4fa; margin: 0; padding: 40px; }}
            .container {{ max-width: 600px; margin: 0 auto; background: white; border: 1px solid #d9e2f0; border-radius: 12px; overflow: hidden; }}
            .header {{ background: {NAVY}; padding: 40px; text-align: center; }}
            .header h1 {{ color: #ffffff; font-size: 26px; font-weight: 600; letter-spacing: 4px; margin: 0; }}
            .header p {{ color: {COPPER}; font-size: 11px; letter-spacing: 3px; margin-top: 8px; }}
            .body {{ padding: 40px; }}
            .body h2 {{ color: {NAVY}; font-size: 22px; font-weight: 600; margin-bottom: 20px; }}
            .body p {{ color: #284176; line-height: 1.7; font-size: 15px; }}
            .status-badge {{ display: inline-block; padding: 8px 20px; color: white; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; border-radius: 6px; margin: 8px 0 16px; }}
            .details {{ background: #f0f4fa; padding: 24px; margin: 24px 0; border-left: 3px solid {COPPER}; }}
            .details p {{ margin: 8px 0; font-size: 14px; color: {NAVY}; }}
            .ref {{ font-family: 'Courier New', monospace; font-size: 12px; color: #8098c8; text-align: center; margin-top: 10px; letter-spacing: 2px; }}
            .footer {{ padding: 30px 40px; border-top: 1px solid #d9e2f0; text-align: center; }}
            .footer p {{ font-size: 12px; color: #8098c8; margin: 4px 0; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>{BUSINESS_NAME}</h1>
                <p>{header_tagline}</p>
            </div>
            <div class="body">
                <h2>{heading}</h2>
                {body}
            </div>
            {ref_html}
            <div class="footer">
                <p>{BUSINESS_NAME} · {BUSINESS_LOCATION}</p>
                <p>LICENSED · INSURED</p>
            </div>
        </div>
    </body>
    </html>
    """


def booking_confirmation_html(name: str, reference: str, address: str, service: str = None, frequency: str = None, preferred_date=None, preferred_time: str = None) -> str:
    date_display = preferred_date.strftime("%B %-d, %Y") if preferred_date else "To be scheduled"
    body = f"""
        <p>Your quote request has been received. A Petraslynn specialist will review it and contact you within one business day to schedule your free property assessment.</p>
        <div class="details">
            {_details([
                ("Service", service or "To be determined"),
                ("Frequency", frequency),
                ("Property Address", address),
                ("Preferred Start Date", date_display),
                ("Preferred Time", preferred_time),
                ("Status", "Pending Review"),
            ])}
        </div>
        <p>Thank you for choosing Petraslynn LLC for lawn care in Aurora and the Denver metro area.</p>
    """
    return _layout(f"Thank you, {_e(name)}.", body, reference=reference)


def booking_admin_notification_html(booking) -> str:
    body = f"""
        <div class="details">
            {_details([
                ("Name", booking.name),
                ("Email", booking.email),
                ("Phone", booking.phone),
                ("Address", booking.address),
                ("Service", booking.service),
                ("Property Size", booking.lawn_size),
                ("Frequency", booking.frequency),
                ("Preferred Date", booking.preferred_date.strftime("%B %-d, %Y") if booking.preferred_date else None),
                ("Notes", booking.notes),
            ])}
        </div>
        <p>Reply to this email to respond to the customer directly.</p>
    """
    return _layout(f"New quote request from {_e(booking.name)}", body, header_tagline="NEW QUOTE REQUEST", reference=booking.reference)


def booking_status_html(name: str, reference: str, status: str, address: str) -> str:
    if hasattr(status, "value"):
        status = status.value

    display_status = status.capitalize()

    status_messages = {
        "confirmed": "Your service request has been <strong>confirmed</strong>. We look forward to caring for your property.",
        "approved": "Your service request has been <strong>approved</strong>. Our team will contact you shortly to schedule your first visit.",
        "cancelled": "Your service request has been <strong>cancelled</strong>. If you believe this is an error, please contact us.",
        "completed": "Your service has been <strong>completed</strong>. Thank you for choosing Petraslynn LLC for your lawn care needs.",
    }

    status_colors = {
        "confirmed": COPPER,
        "approved": COPPER,
        "cancelled": "#c0392b",
        "completed": NAVY,
    }

    message = status_messages.get(status, f"Your request status has been updated to {_e(display_status)}.")
    color = status_colors.get(status, NAVY)

    body = f"""
        <div class="status-badge" style="background: {color};">{_e(display_status)}</div>
        <p>{message}</p>
        <div class="details">
            {_details([("Property Address", address), ("Reference", reference)])}
        </div>
    """
    return _layout(f"Hello, {_e(name)}.", body, reference=reference)


def contact_confirmation_html(name: str, subject: str, message: str) -> str:
    body = f"""
        <p>We have received your message and will respond within one business day.</p>
        <div class="details">
            {_details([("Subject", subject or "No subject"), ("Message", message)])}
        </div>
    """
    return _layout(f"Thank you, {_e(name)}.", body)


def contact_admin_notification_html(name: str, email: str, subject: str, message: str, phone: str = None) -> str:
    body = f"""
        <div class="details">
            {_details([
                ("From", f"{name} ({email})"),
                ("Phone", phone),
                ("Subject", subject or "No subject"),
                ("Message", message),
            ])}
        </div>
        <p>Reply to this email to respond to the customer directly.</p>
    """
    return _layout(f"New message from {_e(name)}", body, header_tagline="NEW CONTACT MESSAGE")
