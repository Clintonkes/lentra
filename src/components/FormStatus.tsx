import { useEffect, useState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

/** Error banner for a failed submission. */
export function FormError({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div role="alert" className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
      <p>{message}</p>
    </div>
  );
}

/**
 * Submit button label while sending. After a few seconds it explains the
 * wait, since the first request after a quiet spell wakes the server.
 */
export function Sending({ label }: { label: string }) {
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setSlow(true), 6000);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      <Loader2 className="h-5 w-5 animate-spin" />
      {slow ? "Still sending, almost there" : label}
    </>
  );
}
