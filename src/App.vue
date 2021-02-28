<template>
  <div id="app">
    <Header></Header>
   <div class="form">
     <form>
       
       <input class="taskText" type="text" v-model="taskTitle" placeholder="たすく"/>
       <input class="createbutton" type="button" @click="create" value="作成">
       
     </form>
   </div>

   <div class="task">
    <ul>
       <li v-for="(item,taskIndex) in tasks"          :key="taskIndex">
         <input class="completed" type="checkbox" id="complete" v-model="item.isCompleted"/>
        <p class="taskItemName" :class="{'complete': item.isCompleted }">{{ item.taskTitle }}</p>
         <button @click="deleteTask(taskIndex)" class="command">けす</button>
        </li>
    </ul>
   </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  components:{
    Header
  },
  data() {
    return {
      taskTitle:"",
      tasks:[],
    }
  },
  methods: {
    create(){
      this.tasks.push({
      taskTitle: this.taskTitle
      });
      this.taskTitle = "";
    },
    deleteTask:function(index){
      this.tasks.splice(index,1);
    },
    
     
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app{
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
.taskText{
width: 80%;
height: 33px;
border: 2px solid rgb(211, 184, 162);
color: rgb(155, 119, 119);
border-radius: 0.7em;
outline: none;
}

.createbutton{
width: 13%;
height: 33px;
margin-left: 5%;
border-radius: 0.6em;
background: rgb(212, 156, 156);
color: #fff;
font-weight: bold;
border: 2px solid rgb(212, 156, 156);
border-bottom:4px solid rgb(182, 132, 132);
outline: none;
cursor: pointer;

}
.createbutton:active{
border-bottom:1px solid rgb(182, 132, 132);
opacity: 0.8;
}

ul li{
  width: 100%;
  margin: 20px auto;
  list-style: none;
  line-height: 1;
  font-size: 20px;
  display: flex;
  position: relative;
}

.completed{
margin: 5px 10px 0 0;
}

.taskItemName{
  width: 70%;
  color: rgb(155, 119, 119);
  margin-right: 10px;
  font-size: 22px;
  text-align: left;
}

.complete {
  text-decoration: line-through;
  color: #ddd;
}

.command{
  width: 13%;
  height: 30px;
  border-radius: 0.6em;
  background: rgb(212, 156, 156);
  color: #fff;
  font-weight: bold;
  border: 2px solid rgb(212, 156, 156);
  border-bottom:4px solid rgb(182, 132, 132);
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}

.command:active{
border-bottom:1px solid rgb(182, 132, 132);
opacity: 0.8;
}
</style>