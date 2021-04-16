<template>
  <div id="app">
    <Header></Header>
   <div class="form">
     <form>
       <input class="taskText" type="text" v-model="taskTitle" placeholder="What today's task?"/>
       <input class="button" type="submit" @click="create" value="Create">
       <p v-if="errormessage" class="error">※Please input the task</p>
     </form>
   </div>

   <div class="task">
     <!-- <div class="allselect flex">
      <input type="checkbox" v-model="allcheck" class="completed" @click="allselectcheck"/><p class="allcheck">All check</p>
      <button class="button">All Delete</button>
     </div> -->
    <ul class="task">
       <li v-for="(item,taskIndex) in tasks" :key="taskIndex" class="flex">
         <input class="completed" type="checkbox" id="complete" v-model="item.isCompleted"/>
        <p class="taskItemName" :class="{'complete': item.isCompleted }">{{ item.taskTitle }}</p>
         <button @click="deleteTask(taskIndex)" class="button">Delete</button>
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
      taskTitle: "",
      tasks:[],
      errormessage:false,
      allselect:false,
    }
  },
  methods: {
    create(e){
      if (!this.taskTitle == "") {
        this.tasks.push({
      taskTitle: this.taskTitle
      });
      this.errormessage = false;
      this.taskTitle = "";
      e.preventDefault();
      
      }else{
        this.errormessage = true;
        e.preventDefault();
      }
    },
    deleteTask:function(index){
      this.tasks.splice(index,1);
    },
    allselectcheck(){
      if (this.allcheck) {
        this.isCompleted = true;
      }
    }
  },
  watch:{
    tasks:{
      handler:function(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
      },
      deep:true
    }
  },
  mounted:function() {
    this.tasks = JSON.parse(localStorage.getItem("tasks"))||[];
  },
};
</script>

<style>
/* ====================
    全体設計
==================== */
*{
  margin: 0;
  padding: 0;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  line-height: 1;
}
.flex{
  display: flex;
}
p{
  color: rgb(155, 119, 119);
}
/* ====================
    タスク 入力
==================== */
.form,.task{
  width: 650px;
  margin: 0 auto;
}

.taskText{
  width: 500px;
  height: 33px;
  border: 2px solid rgb(211, 184, 162);
  color: rgb(155, 119, 119);
  border-radius: 0.7em;
  outline: none;
}

.error{
  color: red;
}
/* ====================
    ボタン
==================== */
.button{
  width: 90px;
  height: 28px;
  margin-left: 10px;
  border-radius: 0.6em;
  background: rgb(212, 156, 156);
  color: #fff;
  font-weight: bold;
  border: 2px solid rgb(212, 156, 156);
  border-bottom:2px solid rgb(182, 132, 132);
  outline: none;
  cursor: pointer;
}

.button:active{
  border-bottom:1px solid rgb(182, 132, 132);
  opacity: 0.8;
}
/* ====================
    タスク リスト
==================== */
ul{
  margin: 15px 0;
  list-style: none;
  font-size: 20px;
}
li:first-child{
  margin-top: 10px;
  border-top: 1px dashed rgb(182, 132, 132);
}
li{
  padding:8px;
  border-bottom: 1px dashed rgb(182, 132, 132);
}
.taskItemName{
  width: 460px;
  margin-left:20px;
  padding-top: 3px;
}
.complete{
  text-decoration: line-through;
  color: #ddd;
}
.completed{
  margin-top: 6px;
}
/* ====================
    全選択、全削除
==================== */
.allselect{
  width: 300px;
  margin: 10px 0;
}
.allcheck{
  font-weight: bold;
  font-size: 20px;
  margin: 0 10px;
  padding-top: 3px;
}
</style>