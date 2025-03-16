export const parseEventDate = (dateString: string, year: string): Date => {
  return new Date(`${dateString} ${year}`);
};
