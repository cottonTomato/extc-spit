export const publicationCalculateTotal = (data) => {
  const total = { Journal: 0, Conference: 0, Patent: 0 };
  Object.keys(data).forEach(year => {
    if (year !== 'Name of Faculty') {
      total.Journal += data[year].Journal;
      total.Conference += data[year].Conference;
      total.Patent += data[year].Patent;
    }
  });
  return total;
};