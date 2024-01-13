import { format, formatDistanceToNow } from "date-fns";

export const formatDate = (date: string) => {
  return format(new Date(date), "Pp");
};

export const formatDateToNow = (date: string) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
