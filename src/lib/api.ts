// Set at build time: .env for local dev, the GitHub repo variable
// VITE_API_URL for the deployed site (the workflow refuses to build without
// it). The localhost fallback only applies to `npm run dev`.
const API_URL = (
  import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:8000' : '')
).replace(/\/$/, '');

async function post<T>(path: string, body: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    // fetch only rejects when no response arrived at all (offline, DNS,
    // CORS, or the server still waking up) — its own message is just
    // "Failed to fetch", which means nothing to a customer.
    throw new Error(
      'We could not reach our server. Please check your connection and try again, or give us a call.'
    );
  }

  if (!res.ok) {
    const detail = await res
      .json()
      .then((data) => data?.detail)
      .catch(() => null);
    // FastAPI validation errors (422) arrive as a list of field errors;
    // show the first one, e.g. "value is not a valid email address: ...".
    const message =
      typeof detail === 'string'
        ? detail
        : Array.isArray(detail) && typeof detail[0]?.msg === 'string'
          ? detail[0].msg.replace(/^Value error, /, '')
          : 'Something went wrong. Please try again.';
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}

export interface BookingRequest {
  address: string;
  name: string;
  email: string;
  phone: string;
  frequency?: string;
  preferred_date?: string;
  preferred_time?: string;
  service?: string;
  lawn_size?: string;
  notes?: string;
}

export interface BookingResponse extends BookingRequest {
  id: number;
  reference: string;
  status: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export function createBooking(data: BookingRequest) {
  return post<BookingResponse>('/api/bookings', data);
}

export function createContact(data: ContactRequest) {
  return post('/api/contacts', data);
}
