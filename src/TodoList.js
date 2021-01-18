import React from 'react';
import { connect } from 'react-redux'
import { changeInput, addItem, deleteItem } from './store/actionCreators'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import './style.scss'

const TodoList = (props) => {
    let { inputValue, changeInput, clickBtn, list, deleteItem } = props
    return (
        <div className="container">
            <div>
                <Input
                    style={{ width: '250px' }}
                    value={inputValue}
                    onChange={changeInput}
                />
                <Button type='primary' onClick={clickBtn}>添加</Button>
            </div>
            <div className="list_content">
                <List
                    style={{ width: '315px' }}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => { deleteItem(index) }}>
                            {item}
                        </List.Item>
                    )}
                >
                </List>
            </div>
        </div>
    );
}

// reducer里面的state

const stateProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// dispatch 派发

const dispatchProps = (dispatch) => {
    return {
        changeInput(e) {
            const action = changeInput(e.target.value)
            dispatch(action)
        },
        clickBtn() {
            const action = addItem()
            dispatch(action)
        },
        deleteItem(index) {
            const action = deleteItem(index)
            dispatch(action)
        }
    }
}

// connect(参数一：数据，参数二：调用方法)
export default connect(stateProps, dispatchProps)(TodoList);