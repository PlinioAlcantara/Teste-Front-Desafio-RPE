import { parseISO, format } from "date-fns";

export function formData(dataISO) {
  if (!dataISO) return "";

  try {
    const data = parseISO(dataISO);
    return format(data, "dd/MM/yyyy");
  } catch {
    return "Data inválida";
  }
}

