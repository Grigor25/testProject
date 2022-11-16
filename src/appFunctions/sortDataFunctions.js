export const sortByRate = (data, isSorted, setIsSorted, sortData) => {
  const sortedData = [...data].sort((a, b) => {
    if (isSorted === "sortedByRateLower") {
      setIsSorted("sortedByRateHigher");
      return a.rating - b.rating;
    }
    setIsSorted("sortedByRateLower");
    return b.rating - a.rating;
  });
  sortData(sortedData);
}; // Сортирование по рейтингу


export const sortByRegistracionDate = (
  data,
  sortData,
  isSorted,
  setIsSorted
) => {
  const sortedData = [...data].sort((a, b) => {
    if (isSorted === "sordetByDateHiger") {
      setIsSorted("sordetByDateLower");
      return new Date(a.registration_date) - new Date(b.registration_date);
    }
    setIsSorted("sordetByDateHiger");
    return new Date(b.registration_date) - new Date(a.registration_date);
  });
  sortData(sortedData);
}; //  Сортирование по дате регистрации
