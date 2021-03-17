import React, { PureComponent } from 'react';
import styled from 'styled-components'

const List =styled.li`
    float: left;
    color:${props=>props.color};
    text-decoration:${props=>props.textChecked};
    margin:5px 30px;
    padding:3px;
    
`;
const DeleteList =styled.span`
    float: right;
    position:absolute;
    right:10px;
    top:5px;
    text-decoration:underline;
    cursor: pointer;
    color:#ccc;
    &:hover{
        color:pink;
    }
`
const CheckBox=styled.input.attrs({
    id:'checkbox',
    type:'checkbox'
})`
    float: left;
    position:absolute;
    top:7px;
    width:17px;
    height:17px;
    background-color:pink;
    border-radius: 100%;
`

class TodoList extends PureComponent {
    
    
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.data.map((item,index)=>{
                            return(
                                <div  style={{overflow:'hidden',borderBottom:'1px solid #ccc',position:'relative'}}>
                                    <CheckBox checked={item.isDone} onChange={e=>this.isChecked(index)}/>
                                    <List key={item.id} color='pink' textChecked={item.isDone?'line-through':''}>
                                        {item.content}
                                    </List>
                                    <DeleteList onClick={e=>{this.deleteList(index)}}>删除</DeleteList>
                                    {/* {这里的index从map的index取} */}
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

    deleteList(index){
       
        this.props.deleteTodoList(index)
    }
    isChecked(index){
       
        this.props.changeState(index)
        
    }
}



export default TodoList;