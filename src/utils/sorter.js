
const titleSort = (a, b) => {
  if (a.title.toString().toLowerCase() < b.title.toString().toLowerCase()) return -1;
  if (b.title.toString().toLowerCase() < a.title.toString().toLowerCase()) return 1;
  return 0;
};

const bodySort = (a, b) => {
  if (a.body.toString().toLowerCase() < b.body.toString().toLowerCase()) return -1;
  if (b.body.toString().toLowerCase() < a.body.toString().toLowerCase()) return 1;
  return 0;
};

export const Sorter = {
  ByTitle: titleSort,
  ByBody: bodySort,
};