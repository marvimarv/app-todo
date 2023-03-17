import { TextField } from "@mui/material";
import "../App.css";

const InputTodo = () => {
  return(
    <div>
      <TextField id ="todoInput" label="Todo" variant ="standard" name="todoInput"
      sx={{
        width: '50%'}} 
       />
    </div>
  )
}

export default InputTodo;