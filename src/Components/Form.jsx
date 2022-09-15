import React from 'react'

const Form = (props) => {
    //handle submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTodos([
            ...props.todos, {text: props.inputText, completed: false, id: Math.random() * 1000}
        ]);
        props.setInputText('');
    }

    //set input text
    const setInputText = (e) => {
        props.setInputText(e.target.value);
    }

  return (
    <div className='flex justify-center'>
          <div className='mt-14'>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
              <div className="flex items-center border border-blue-400 focus:bg-slate-300 rounded-full py-2">
                <input className="text-center appearance-none bg-transparent 
                border-none w-[600px] text-gray-700 mr-3 py-1 px-2 
                leading-tight focus:outline-none " type="text" 
                placeholder="What do you need to do today..?" 
                name="inputText"
                value={props.inputText}
                onChange={setInputText}/>
                <button className="flex-shrink-0 bg-blue-400 hover:bg-blue-600 border-blue-400 hover:border-blue-600 text-sm border-4 text-white py-1 px-2 mr-2 rounded-full" type="submit">
                 +
                </button>
                <button className="flex-shrink-0 bg-blue-400 hover:bg-blue-600 border-blue-400 hover:border-blue-600 text-sm border-4 text-white py-1 px-2 mr-2 rounded-full" type="button">
                 clr
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default Form