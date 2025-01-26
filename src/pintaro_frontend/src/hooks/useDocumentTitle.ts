import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | Pintaro`;

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}; 