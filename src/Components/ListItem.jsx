import React from 'react'

const ListItem = ({todo ,todos, setTodos}) => {

    //handle deletion of items
    const deleteItem = (e) => {
        e.preventDefault();
        setTodos(todos.filter((a) => a.id !== todo.id));
    }

    //handle completion
    const completeItem = (e) => {
        e.preventDefault();
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    //handle editing of task
    const editItem = (e) => {
        e.preventDefault();
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, text: e.target.value
                }
            }
            return item;
        }))
    }

  return (
    <div className='w-full max-w-sm sm:max-w-lg mt-6 todo'>
        <div className="flex items-center border border-blue-400 focus:bg-slate-300 py-2">
                <div className="text-left appearance-none bg-transparent border-none w-[600px] text-black mr-3 py-1 px-2 leading-tight focus:outline-none ">
                    <input type="text" value={todo.text} onChange={editItem} className={todo.completed ? 'line-through' : ''}/>
                </div>
              <button className="flex-shrink-0 bg-blue-400 hover:bg-blue-600 border-blue-400 hover:border-blue-600 text-sm border-4 text-white py-1 px-2 mr-2 rounded-full" type="button" onClick = {completeItem}>
                 ✔
                </button>
                <button className="flex-shrink-0 bg-blue-400 hover:bg-blue-600 border-blue-400 hover:border-blue-600 text-sm border-4 text-white py-1 px-2 mr-2 rounded-full" type="button" onClick={editItem}>
                 📝
                </button>
                <button className="flex-shrink-0 bg-blue-400 hover:bg-blue-600 border-blue-400 hover:border-blue-600 text-sm border-4 text-white py-1 px-2 mr-2 rounded-full" type="button" onClick = {deleteItem}>
                ❌
                </button>
        </div>
    </div>
  )
}

export default ListItem