const FORMS_ENDPOINT = "/__forms.html"

export type NetlifyFormFields = Record<string, string | number | boolean | null | undefined>

function toFormValues(fields: NetlifyFormFields): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(fields)) {
    if (v === null || v === undefined) continue
    out[k] = typeof v === "string" ? v : String(v)
  }
  return out
}

export async function submitNetlifyForm(
  formName: string,
  fields: NetlifyFormFields,
): Promise<Response> {
  const body = new URLSearchParams({
    "form-name": formName,
    "bot-field": "",
    ...toFormValues(fields),
  }).toString()

  return fetch(FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  })
}

export function fireNetlifyForm(formName: string, fields: NetlifyFormFields): void {
  submitNetlifyForm(formName, fields).catch(() => {
    // silent — used for tool-usage telemetry; don't surface errors to the user
  })
}
