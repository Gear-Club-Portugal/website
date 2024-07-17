const useTextFromHtml = (body) => {
  const div = document.createElement('div');
  div.innerHTML = body;

  return div.textContent || div.innerText || '';
};

export default useTextFromHtml;
