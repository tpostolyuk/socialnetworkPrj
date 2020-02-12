import React from 'react';
import classes from './Dialog.module.css';
import DialogNames from './DialogNames/DialogNames';
import DialogMessages from './DialogMessages/DialogMessages';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

const Dialogs = props => {

  const { messages, names } = props; 

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

const mapStateToProps = state => {
  return {
    messages: state.message.messages,
    names: state.name.names
  }
}

export default connect(mapStateToProps)(Dialogs);
