export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const nFormatter = (num: number, digits: number | undefined) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup.slice().reverse().find((el) => num >= el.value);
  return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
};

export const isToday = (someDateString: string | number | Date) => {
  const someDate = new Date(someDateString);
  const today = new Date();
  return someDate.getDate() === today.getDate()
    && someDate.getMonth() === today.getMonth()
    && someDate.getFullYear() === today.getFullYear();
};

export const dateTickFormatter = (str: string | number | Date) => {
  const dateObj = new Date(str);
  const userTimezoneOffset = dateObj.getTimezoneOffset() * 60000;
  const newDate = new Date(dateObj.getTime() + userTimezoneOffset);
  const weekday = newDate.toLocaleString('en', { month: 'short' });
  return `${weekday}, ${newDate.getDate()}`;
};

export const setItemToSession = (key: string, item: string) => sessionStorage.setItem(key, item);
export const getItemSession = (key: string) => sessionStorage.getItem(key);

export const getUrlParam = (location: { search: string | string[][] | URLSearchParams; }, key: string) => new URLSearchParams(location.search).get(key);
