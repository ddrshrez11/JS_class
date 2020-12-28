import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
//import { Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NotesDisp(props) {
    let noteList = props.getSavedNotes()
    let eng_month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    console.log(noteList)
    let history = useHistory();

    function getUserReadableDate(date) {
        let readableDate=new Date(date);
       // 11 NOv 2019 2:30
        return readableDate.getDate()+' '+eng_month[readableDate.getMonth()]
        +' '+readableDate.getFullYear()+' '+readableDate.getHours()+':'
        +readableDate.getMinutes();
    }

    // const [open,setopen] = useState(false);
    // const [deleteVar,setDelete] = useState(false);

    // function handleClickOpen(event,index){
    //     setopen(true);

    //     function deleteSelect() {
    //         //if (deleteVar) {
    //             props.deleteNote(index)
    //             setDelete(false)
    //             setopen(false)
    //        // }
    //     }
    // }
    // function handleClose(){
    //     setopen(false);
    // }

    // function handleDelete(){
    //     setDelete(true);
    // }

    return (
        <div>
            {/* <div>
                <Dialog
                    open={open}
                    onClose={handleClose}>
                        <DialogTitle id='alert-dialog-title'>
                            {'Delete Confirmation'}
                        </DialogTitle>

                        <DialogContent id="alert-dialog-description">
                            Are you sure you want to detele this note?
                        </DialogContent>

                        <DialogActions>
                            <Button onclick={handleClose} color='secondary' autofocus>
                                Disagree
                            </Button>
                            <Button onclick={handleClickOpen.deleteSelect} color='primary'>
                                Agree
                            </Button>
                        </DialogActions>
                </Dialog>
            </div> */}
            
            <TableContainer>
                <Table stickyheader='true'> 
                    <TableHead>
                        <TableRow>
                            <TableCell
                                key='id'
                                align="center"
                                style={{ minWidth:50 }}>
                                ID
                            </TableCell>
                            <TableCell
                                key='note'
                                style={{ minWidth:300 }}
                                align="center">
                                Notes
                            </TableCell>
                            <TableCell
                                key='created_date'
                                style={{ minWidth:150 }}
                                align="center">
                                Created Date
                            </TableCell>
                            <TableCell
                                key='actions'
                                style={{ minWidth:100 }}
                                align="center">
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    {noteList.map((noteItem, index) => 
                        <TableRow hover>
                            <TableCell
                                key='id'
                                align="center">
                                {index+1}
                            </TableCell>
                            <TableCell
                                key='note'
                                align="left">
                                {noteItem.NoteText}
                            </TableCell>
                            <TableCell
                            key='created_date'
                            align="center">
                                {getUserReadableDate(noteItem.created_date)}
                            </TableCell>
                            <TableCell
                                key='actions'
                                align="center">
                                <Button onClick={() => history.push('update/'+(index+1), {noteList:noteList})}>Update</Button><br/>
                                <Button type='reset' onClick={() => {props.deleteNote(index);noteList=props.getSavedNotes()} /*handleClickOpen(index)*/}>Delete</Button>
                            </TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
