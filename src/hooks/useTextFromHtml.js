import { useMemo } from 'react';

const useTextFromHtml = (body) =>
  useMemo(() => {
    const div = document.createElement('div');
    div.innerHTML = body;
    return div.textContent || div.innerText || '';
  }, [body]);

export default useTextFromHtml;
