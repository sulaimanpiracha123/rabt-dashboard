import classNames from 'classnames';
import React, { useId } from 'react'

const Textarea = ({
    labelText = "",
    name,
    rows = 3,
    cols = 40,
    resize = true,
    helpers = false,
    helperText,
    remainingChar = 0,
    maxChar = 0,
    isError = false,
    errorMsg = "",
    ...attributes
}) => {
    const htmlFor = useId();

  return (
    <div className='w-full'>
       <label id={htmlFor} htmlFor={htmlFor} className={classNames("text-sm font-bold text-primary")}>
        {labelText}
      </label>
      <div>
        <textarea
          id={htmlFor}
          rows={rows}
          cols={cols}
          name={name}
          aria-labelledby={htmlFor}
          autoComplete="off"
          className={classNames(
            "block w-full rounded-md border p-2 shadow-sm placeholder:text-primary focus:outline-none",
          )}
          {...attributes}
        />
      </div>
    </div>
  )
}

export default Textarea