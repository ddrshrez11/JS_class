import React, { useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { AppBar, Button, TextField, Toolbar } from '@material-ui/core'


export default function UpdateNote() {
    let MY_NOTE='_my_note'
    let history = useHistory()
    let params = useParams()
    let index = params.id-1
    let noteList= history.location.state.noteList;
    let noteText=noteList[index].NoteText
    const [ updated,setUpdated]=useState(false)
    var noteDate = noteList[index].created_date

    //console.log(noteList[index].NoteText)
    function handleUpdate(event){
        let noteItem={'NoteText':noteText, 'created_date':noteDate}
        let newNoteList= noteList.slice(0,index).concat(noteItem,noteList.slice(index+1))
        //noteList.splice(index,1, noteItem)
        console.log(noteItem)
        localStorage.setItem(MY_NOTE,JSON.stringify(newNoteList))
        setUpdated(true)
        //return <Redirect to ='/'/>
    }

    function handleChange(event){
        noteText = event.target.value
        console.log(noteText)
    }
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <h1>TODO List</h1>
                </Toolbar>
            </AppBar>
            <div style={{ textAlign:'center', margin:50 }}>
                <h1>Update Note</h1>
                <form 
                    onSubmit={handleUpdate}
                    style={{ display: 'flex',  justifyContent: 'center',  alignItems: 'center' }}
                >
                    <TextField
                        placeholder="Enter Note"
                        multiline
                        rows={2}
                        rowsMax={4}
                        variant='filled'
                        name='NoteText'
                        label="Edit Note"
                        onChange={handleChange}
                        defaultValue= {noteList[index].NoteText}
                    />

                    <Button
                        variant='contained'
                        color="primary"
                        style={{ marginLeft:20 }}
                        type="submit"
                    >
                        Update Note
                    </Button>
                </form>
                {(updated)?<Redirect to="/"/>:'' }
            </div>
            {/* index starts from 0 */}
            {params.id - 1 }
        </div>
    )
}