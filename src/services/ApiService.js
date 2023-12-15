import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_URL;
const converterBaseUrl = process.env.REACT_APP_API_CONVERTER;
const apiKey = process.env.REACT_APP_API_KEY;

const handleApiError = (error) => {
  throw error;
};

const ApiService = {
  ConverterMoney: async () => {
    try {
      const url = `${apiBaseUrl}/${apiKey}/codes`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  ChangeMoney: async (countryOne, countryTwo, amount) => {
    try {
      const url = `${converterBaseUrl}/${countryOne}/${countryTwo}/${amount}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },
};

export default ApiService;
