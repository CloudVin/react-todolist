import React, { PureComponent } from 'react';
import styled from 'styled-components'
import TodoList from './components/TodoList'
import TodoInput from './components/InputTodo'

const TodoWrapper =styled.div`
  width:600px;
  border:solid 1px #eee;
  margin:50px auto ;
  padding:10px;
  border-radius:10px;
  box-shadow:0 0 8px #ccc;
`

class App extends PureComponent {
  constructor (props){
    super(props);
    this.state={
      data:[
        {
          content:'学习react',
          isDone:true,
          id:1
        },
        {
          content:'看书',
          isDone:false,
          id:2
        },
        {
          content:'背单词',
          isDone:false,
          id:3
        },
        {
          content:'健身',
          isDone:false,
          id:4
        }
      ]
    }
  }
  render() {
    return (
      <TodoWrapper>
        <h3>今日待办---<span>已完成{this.state.data.filter(item=>{
          return item.isDone
        }).length}/未完成{this.state.data.filter(item=>{
          return !item.isDone
        }).length}</span></h3>
        
        <TodoList 
          data={this.state.data} 
          deleteTodoList={this.deleteTodoList.bind(this)} 
          changeState={index=>this.changeState(index)}
        />
        <TodoInput data={this.state.data} addTodoList={this.addTodoList.bind(this)}/>
      </TodoWrapper>
    );
  }
  
  addTodoList(data){
    this.setState({
      data:[data,...this.state.data]
    })
    
  }
  deleteTodoList(index){
    
    this.setState({
      data:this.state.data.filter((item,indey)=>{
        return index!==indey})
    })
    
  }

  changeState(index){
      
    this.setState({
      data:this.state.data.map((item,indey)=>{
          if(index===indey){
            item.isDone=!item.isDone
            
          }
          return item
      })
    })
  }

}


export default App;


