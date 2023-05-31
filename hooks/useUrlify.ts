
export const useUrlify = (text: string) => {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url: string) {
    return '<a href="' + url + '">Abrir enlace</a>';
  });
};