import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  DataGridPro,
  GridActionsCellItem,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomEmail,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import AddNews from './AddNews';

export default function ColumnPinningWithCheckboxSelection() {
  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <div align="left"><AddNews/></div>
      <DataGridPro
        rows={rows}
        columns={columns}
        checkboxSelection
        initialState={{
          pinnedColumns: {
            left: [GRID_CHECKBOX_SELECTION_COL_DEF.field],
            right: ['actions'],
            
          },
        }}
      />
    </div>
    
  );
}

const columns = [
  { field: 'name', headerName: '新聞標題', width: 450, editable: true },
  // { field: 'email', headerName: '連結', width: 200, editable: true },
  { field: 'age', headerName: '類別', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: '更新',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: '上傳日期',
    type: 'date',
    width: 220,
    editable: true,
  },
  {
    field: 'actions',
    type: 'actions',
    width: 200,
    getActions: () => [
      <Input accept="image/*" id="contained-button-file" multiple type="file" />,
  

      <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
    ],
  },
];
const Input = styled('input')({
  display: 'none',
});

const rows = [
  // {
  //   id: 1,
  //   name: randomTraderName(),
  //   email: randomEmail(),
  //   age: "台灣",
  //   dateCreated: randomCreatedDate(),
  //   lastLogin: randomUpdatedDate(),
  // },

  {
    id: 1,
    name: "王力宏暫退演藝圈還不夠！《環時》重砲：失德藝人必須涼",
    email: randomEmail(),
    age: "台灣",
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate() ,
    
  },
  {
    id: 2,
    name: randomTraderName(),
    email: randomEmail(),
    age: "國際",
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    email: randomEmail(),
    age: "體育",
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    email: randomEmail(),
    age: "Covid",
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    email: randomEmail(),
    age: "台灣",
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];
