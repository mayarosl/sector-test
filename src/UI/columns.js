import { Sorter } from "../utils/sorter";

const COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
    sorter: {
      compare: Sorter.ByTitle,
      multiple: 1
    }
  },
  {
    title: 'Описание',
    dataIndex: 'body',
    key: 'body',
    sorter: {
      compare: Sorter.ByBody,
      multiple: 1
    }
  },
];

export default COLUMNS;