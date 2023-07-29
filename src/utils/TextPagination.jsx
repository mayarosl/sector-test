const TextPagination = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a href="#">Назад</a>;
  }
  if (type === 'next') {
    return <a href="#">Далее</a>;
  }
  
  return originalElement;
};

export default TextPagination;