import Link from 'next/link'

export function BlogModal ({ show, onClose }) {
  if (!show) {
    return null
  }
  return (
    <div className='modal z-40' onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        className='p-4 bg-white w-2/5  border-4 border-sky-600 flex place-content-center '
      >
        <form >
          <h1 className='text-center text-5xl mb-4 border-b pb-4 '>
            Register a New Post
          </h1>
          <label className='text-slate-950'>Title:</label>
          <input
            type='text'
            className='mt-1 block text-slate-400 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mb-2'
            placeholder='Post title'
            name='fullname'
          />
          <label
            for='username-success'
            className='block mb-2 text-sm font-medium text-green-700 dark:text-green-500'
          >
            Your name
          </label>
          <input
            type='text'
            id='username-success'
            className='bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400 mb-2'
            placeholder='Bonnie Green'
          ></input>

          <label
            for='username-error'
            className='block mb-2 text-sm font-medium text-red-700 dark:text-red-500'
          >
            Your name
          </label>
          <input
            type='text'
            id='username-error'
            className='bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400 mb-2'
            placeholder='Bonnie Green'
          />

          <label
            for='message'
            className='block mb-2 text-sm font-medium text-slate-950'
          >
            Post Content
          </label>
          <textarea
            id='message'
            rows='4'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Post content...'
          ></textarea>
          <button
            onClick={onClose}
            className='ml-2 mt-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            Register New Post
          </button>
        </form>
      </div>
    </div>
  )
}
