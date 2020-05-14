import React from 'react';
import classes from './Dialog.module.css';
import { DialogNames } from './DialogNames/DialogNames';
import { DialogMessages } from './DialogMessages/DialogMessages';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { db } from '../../config';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getNames, getMessages } from '../../redux/actions/index';

export const Dialogs = () => {
  const { names } = useSelector(state => state.names, []);
  const { messages } = useSelector(state => state.messages, []);
  const dispatch = useDispatch();
  
  useEffect(() => {
    db.collection('dialogMessages').get()
      .then(snap => {
        const result = [];
        snap.forEach(doc => result.push({...doc.data(), id: doc.id}))
        dispatch(getMessages(result));
      })
    db.collection('dialogNames').get()
      .then(snap => {
        const result = [];
        snap.forEach(doc => result.push({...doc.data(), id: doc.id}));
        dispatch(getNames(result), shallowEqual);
    })
  }, [dispatch])

  return (
    <div className={classes.dialogWrapper}>
      <div className={classes.dialogNameItems}>
      { names && names.map(item => {
        return (
          <NavLink key={item.id} activeClassName={classes.active} to={`/dialogs/${item.id}`}>
            <DialogNames name={item.name} />
          </NavLink>
        );
        }) }
      </div>
      <div className={classes.dialogMessageItems}>
        <div className={classes.dialogsMsgItem}>
          { messages && messages.map(item => <DialogMessages msg={item.message} key={item.id} />) }
        </div>
      </div>
    </div>
  );
}
