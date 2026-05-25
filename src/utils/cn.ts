import classNames from 'classnames'

type ClassValue = Parameters<typeof classNames>[number]

export const cn = (...classes: ClassValue[]) => classNames(...classes)
