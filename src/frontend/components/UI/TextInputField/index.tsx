import React, { ChangeEvent, FocusEvent, ReactNode, useContext } from 'react'
import classnames from 'classnames'
import ContextProvider from 'frontend/state/ContextProvider'
import './index.css'

interface TextInputFieldProps {
  htmlId: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  inputIcon?: ReactNode
  afterInput?: ReactNode
  inlineElement?: ReactNode
  label?: string
  placeholder?: string
  disabled?: boolean
  extraClass?: string
  warning?: ReactNode
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  maxLength?: number
}

const TextInputField = ({
  htmlId,
  value,
  onChange,
  label,
  placeholder,
  disabled = false,
  extraClass = '',
  inputIcon,
  afterInput,
  warning,
  onBlur,
  maxLength,
  inlineElement
}: TextInputFieldProps) => {
  const { isRTL } = useContext(ContextProvider)

  return (
    <div
      className={classnames(`textInputFieldWrapper Field ${extraClass}`, {
        isRTL
      })}
    >
      {label && <label htmlFor={htmlId}>{label}</label>}
      <div className="inputWrapper">
        {inputIcon}
        <input
          type="text"
          id={htmlId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          onBlur={onBlur}
          maxLength={maxLength}
        />
      </div>
      <div className="inlineElement">{inlineElement}</div>
      {value && warning}
      {afterInput}
    </div>
  )
}

export default TextInputField
