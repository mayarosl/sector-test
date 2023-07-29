import { Sorter } from "../utils/sorter";
import toggleSortIcon from "../utils/toggleSortIcon";

const COLUMNS = [
  {
    key: 'id',
    title: ({ sortColumns }) => {
      const sortedColumn = sortColumns?.find(({ column }) => column.key === "id");
      return (toggleSortIcon('ID', sortedColumn))
    },
    dataIndex: 'id',
    sorter: {
      compare: Sorter.ById,
      multiple: 1
    },
    align: 'center'
  },

  {
    key: 'title',
    title: ({ sortColumns }) => {
      const sortedColumn = sortColumns?.find(({ column }) => column.key === "title");
      return (toggleSortIcon('Заголовок', sortedColumn))
    },
    dataIndex: 'title',
    // align: 'center',
    sorter: {
      compare: Sorter.ByTitle,
      multiple: 1
    },
  },
  {
    key: 'body',
    title: ({ sortColumns }) => {
      const sortedColumn = sortColumns?.find(({ column }) => column.key === "body");
      return (toggleSortIcon('Описание', sortedColumn))
    },
    dataIndex: 'body',
    // align: 'center',
    sorter: {
      compare: Sorter.ByBody,
      multiple: 1
    },
  },
];

export default COLUMNS;