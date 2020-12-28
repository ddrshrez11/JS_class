import React, { useState } from 'react'
import { AppBar, Button, TextField, Toolbar } from '@material-ui/core'
import NotesDisp from './NotesDisp'
//import { makeStyles } from '@material-ui/core/styles';

export default function Home() {
    const [note,setNote] = useState({})
    const [noteDel,setDel] = useState(false)
    let MY_NOTE='_my_note'
    let noteText = '';
    let noteList=getSavedNotes()?getSavedNotes():[]

    function addNote(){
        note['NoteText']=noteText;
        note['created_date']=new Date();
        setNote(note)
        noteList=getSavedNotes()
        noteList.push(note);
        localStorage.setItem(MY_NOTE,JSON.stringify(noteList))
    }

    function getSavedNotes(){
        let noteList=localStorage.getItem(MY_NOTE);
        console.log(noteList)
        return JSON.parse(noteList);
    }

    function deleteNote(index){
        //delete noteList[index];
        setDel(true)
        let i = index
        noteList = noteList.slice(0, i).concat(noteList.slice(i + 1, noteList.length));
        localStorage.setItem(MY_NOTE,JSON.stringify(noteList))
        console.log('delete '+index)
        //noteList=getSavedNotes()?getSavedNotes():[]
    }


    function handleChange(event){
        noteText = event.target.value;
    }

    function handleSubmit(event){
        addNote();
        noteList=getSavedNotes()?getSavedNotes():[]
        console.log(note)
    }

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <h1>TODO List</h1>
                </Toolbar>
            </AppBar>
            <div style={{ textAlign:'center', margin:50 }}>
                <form 
                    onSubmit={handleSubmit}
                    style={{ display: 'flex',  justifyContent: 'center',  alignItems: 'center' }}>

                    <TextField
                    placeholder="Enter Note"
                    multiline
                    rows={2}
                    rowsMax={4}
                    variant='filled'
                    name='NoteText'
                    label="New Note"
                    onChange={handleChange}
                    />
                    <Button
                        variant='contained'
                        color="primary"
                        type="submit"
                        style={{ marginLeft:20 }}>
                        Add Note
                    </Button>
                </form>
            </div>

            <NotesDisp getSavedNotes={getSavedNotes} deleteNote={deleteNote} noteDel={noteDel} setDel={setDel}/>
        </div>
    )
}
