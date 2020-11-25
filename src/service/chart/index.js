const getChartData = async (url) => {
  const response = await fetch(url);

  return response.json();
};

export default {
  getChartData,
};
