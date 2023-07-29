import { Sorter } from "../utils/sorter";
import toggleIcon from "../utils/toggleIcon";

const COLUMNS = [
  {
    key: 'id',
    title: ({ sortColumns }) => {
      const sortedColumn = sortColumns?.find(({ column }) => column.key === "id");
      return (toggleIcon('ID', sortedColumn))
    },
    dataIndex: 'id',
    sorter: {
      compare: Sorter.ById,
      multiple: 1
    },
    width: 115,
    align: 'center'
  },

  {
    key: 'title',
    title: ({ sortColumns }) => {
      const sortedColumn = sortColumns?.find(({ column }) => column.key === "title");
      return (toggleIcon('Заголовок', sortedColumn))
    },
    dataIndex: 'title',
    // align: 'center',
    sorter: {
      compare: Sorter.ByTitle,
      multiple: 1
    },
    width: 560
  },
  {
    key: 'body',
    title: ({ sortColumns }) => {
      const sortedColumn = sortColumns?.find(({ column }) => column.key === "body");
      return (toggleIcon('Описание', sortedColumn))
    },
    dataIndex: 'body',
    // align: 'center',
    sorter: {
      compare: Sorter.ByBody,
      multiple: 1
    },
    width: 500
  },
];

export default COLUMNS;