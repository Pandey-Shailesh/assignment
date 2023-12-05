import React from 'react';
import { useTable } from 'react-table';

const TableComponent = ({ data }) => {


  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Image',
        accessor: 'imageUrl',
        Cell: ({ value }) => <img src={value} alt="User" style={{ maxWidth: '50px', maxHeight: '50px' }} />,
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Lable',
        accessor: 'lable',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },

    ],
    []
  );


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  useTable({ columns, data});

return (
  <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()} style={{ borderBottom: '1px solid #ddd' }}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()} style={{ padding: '8px', textAlign: 'left' }}>
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} style={{ borderBottom: '1px solid #ddd' }}>
            {row.cells.map(cell => (
              <td {...cell.getCellProps()} style={{ padding: '8px' }}>
                {cell.render('Cell')}
              </td>
            ))}
            <button >Save</button>
            <button>Reset</button>
          </tr>
        );
      })}
    </tbody>
  </table>
);
};

export default TableComponent;
