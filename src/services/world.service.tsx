const API_URL = process.env.REACT_APP_API_URL;

const getWorldStatistic = async (dateFromParam: string, dateToParam: string) => {
  const data = await fetch(`${API_URL}/world?from=${dateFromParam}&to=${dateToParam}`);
  return data.json();
};

export default { getWorldStatistic };
