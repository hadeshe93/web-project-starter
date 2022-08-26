import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getCreateTodoCreator } from '../../store/action-creators';

import style from './index.module.scss';

function ViewCreate(props) {
  const history = useHistory();
  const onBack = () => {
    history.goBack();
  };
  return <div>
    <h4 className={style.title}>CREATE VIEW</h4>
    <div>
      <button onClick={props.createTodo}>新增</button>
      <button onClick={onBack}>返回</button>
    </div>
  </div>;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createTodo() {
    const now = new Date().getTime();
    dispatch(getCreateTodoCreator({
      content: `内容 ${now}`,
      creator: 'hadeshe',
      lastModifier: 'hadeshe',
      createdAt: now,
      updatedAt: now,
    }));
  } 
});

export default connect(() => ({}), mapDispatchToProps)(ViewCreate) as FunctionComponent;
