import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { updateStatus } from '../../../redux/actions/postAction';
import { useDispatch, useSelector } from 'react-redux';


export const ProfileStatus = () => {
  const status = useSelector(state => state.post.status);
  const [value, setValue] = useState(status);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  
  const handleBlur = e => {
    setEditMode(false);
    dispatch(updateStatus(e.target.value))
  }

  return (
    <div>
      {editMode
        ? <TextField
            id="standard-basic"
            label="Status"
            onBlur={e => handleBlur(e)}
            onChange={e => setValue(e.target.value)}
            autoFocus={true}
            value={value}
          /> 
        : <h1 onDoubleClick={() => setEditMode(true)}>Status: {status}</h1>
      }
    </div>
  )
}
