import React, { useId } from 'react'

const TextField = ({ type = "text", labelText = "",placeholder="", ...attributes }) => {
    const htmlFor = useId()

  return (
    <div>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{labelText}</label>
    <input type={type} id={htmlFor} placeholder={placeholder} className="w-full rounded-md p-2 focus:border-white focus:ring-white focus:outline-none text-sm"  required
       aria-labelledby={htmlFor}
       autoComplete="off"
       {...attributes}
    />
</div>
      )
}

export default TextField