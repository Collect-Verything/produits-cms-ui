import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';
import AdminNavBar from "../../../base/admin-navbar/AdminNavBar";



export default function AdminClient(){


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'mail',
            headerName: 'Mail',
            width: 110,
            editable: true,
        },
        {
            field: 'telephone',
            headerName: 'Telephone',
            width: 160,
            editable: true,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 4, lastName: 'Stark', firstName: 'Arya', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 6, lastName: 'Melisandre', firstName: 'Pute', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 10, lastName: 'Snow', firstName: 'Jon', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 11, lastName: 'Snow', firstName: 'Jon', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 12, lastName: 'Lannister', firstName: 'Cersei', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 13, lastName: 'Lannister', firstName: 'Jaime', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 14, lastName: 'Stark', firstName: 'Arya', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 16, lastName: 'Melisandre', firstName: 'Bite', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 17, lastName: 'Clifford', firstName: 'Ferrara', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 18, lastName: 'Frances', firstName: 'Rossini', mail: 'test@gmail.com' , telephone: "0650493857"},
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', mail: 'test@gmail.com' , telephone: "0650493857"},
    ];


    return(
        <>
            <AdminNavBar/>
            <Box sx={{ height: 800, width: '80%', margin: "auto",padding: "40px" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 13,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    )
}