import React, { PureComponent } from 'react';
import styled from 'styled-components'

const TodoInput=styled.input.attrs({
    palaceholder:'请输入待办',
    type:'text'
})`
    width:300px;
    padding:5px;
    margin-top:15px;
    margin-right:15px;
    outline:none;
`
const Btn= styled.button`
    width:60px;
    text-align:center;
    padding:5px;
    background-color:#0B81F9;
    color:#fff;
    border: none;
    cursor: pointer;
    border-radius:5px;
    text-decoration: none;
    outline:none;
`


class InputTodo extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            content:''
        }
    }
    render() {
        return (
            <div>
                <TodoInput onChange={e=>this.changeValue(e)} value={this.state.content} onKeyDown={e=>{this.EnterkeyDown(e)}}/>
                <Btn onClick={e=>this.addList()} >添加</Btn>
            </div>
        );
    }
    changeValue(e){
        this.setState({
            content:e.target.value
        })
    }
    addList(){
        let data={
            content:this.state.content,
            isDone:false,
            id:this.props.data.length+1,
        }
        this.setState({
            content:''
        })
        
        this.props.addTodoList(data)
    }
    EnterkeyDown(e){
       
        if(e.keyCode===13){
            this.addList()
        }
    }
}



export default InputTodo;