import React from 'react'

const Todo = ({id, title, description, mongoId, complete, deleteTodo, completeTodo}) => {
  return (
        <tr className="bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-black">{id + 1}</th>
            <td className={`px-6 py-4 text-gray-600 ${complete ? "line-through": ""}`}>{title}</td>
            <td className={`px-6 py-4 text-gray-600 ${complete ? "line-through": ""}`}>{description}</td>
            <td className="px-6 py-4 text-gray-600">{complete ? 'Completed' : "Pending"}</td>
            <td className="px-6 py-4 text-gray-600 flex gap-1">
                <button onClick={() => deleteTodo(mongoId)} className='py-2 px-4 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-700'>Delete</button>
                {complete ? "" : <button onClick={() => completeTodo(mongoId)} className='py-2 px-4 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-700'>Done</button>}
            </td>
        </tr>
    )
}

export default Todo