import React, { CSSProperties, ReactElement } from 'react'

const Card = ({
  title,
  className,
  style,
  children
}: {
  title: string
  className?: string
  style?: CSSProperties
  children: ReactElement
}) => {
  return (
    <div
      className={`grid card place-items-center rounded-box pt-3 ${className}`}
      style={style}>
      {title && (
        <>
          <p className='text-xl pt-2'>{title}</p>
          <hr className='w-full' />
        </>
      )}
      {children}
    </div>
  )
}

export default Card
