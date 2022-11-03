import Image from "next/image"
import React from "react"

type AlertType = "info" | "success" | "error" | "warning"
export type AlertProps = {
  title?: string
  message: string
  type?: AlertType
  hasIcon?: boolean
  autoClose?: boolean
  onClose: VoidFunction
}

const renderIconWithType = (type: AlertType) => {
  switch (type) {
    case "success":
      return (
        <Image className="w-6 h-6" src="assets/icons/alert/success.png" width={24} height={24} />
      )
    case "info":
      return (
        <Image className="w-6 h-6" src="assets/icons/alert/success.png" width={24} height={24} />
      )
    case "error":
      return <Image className="w-6 h-6" src="assets/icons/alert/error.svg" width={24} height={24} />
    case "warning":
      return (
        <Image className="w-6 h-6" src="assets/icons/alert/warning.png" width={24} height={24} />
      )
    default:
      return null
  }
}

const MAPPED_TYPE_COLOR: Record<AlertType, string> = {
  success: "bg-green-400",
  info: "bg-blue-400",
  error: "bg-red-400",
  warning: "bg-yellow-400",
}

const Alert = ({
  title,
  message,
  type = "success",
  hasIcon = true,
  autoClose,
  onClose,
}: AlertProps) => {
  return (
    <div role="alert" className="relative right-4 min-w-[300px]">
      <div className="rounded p-4 shadow-xl min-w-[300px] sm:max-w-[300px]">
        <div className="flex items-start gap-2">
          {hasIcon && <span className="text-green-600 w-6 h-6">{renderIconWithType(type)}</span>}

          <div className="flex-1">
            {title && <strong className="block font-medium text-gray-900">{title}</strong>}

            <p className="mt-1 text-sm text-gray-700">{message}</p>
          </div>

          <button className="text-gray-500 transition hover:text-gray-600" onClick={onClose}>
            <span className="sr-only">Dismiss popup</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      {autoClose && (
        <div
          className={`absolute bottom-0 w-full h-0.5 sm:max-w-[300px] animate-close ${MAPPED_TYPE_COLOR[type]}`}
        ></div>
      )}
    </div>
  )
}

export { Alert }
