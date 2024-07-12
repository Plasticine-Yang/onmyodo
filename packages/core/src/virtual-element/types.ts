export type FunctionComponent<Props = any> = (props: Props) => VirtualElement

export type VirtualElementType = string | FunctionComponent

export interface VirtualElementProps {
  children: VirtualElementChild[]
  [key: string]: any
}

export interface VirtualTextElementProps {
  nodeValue: string
}

export interface VirtualElement {
  type: VirtualElementType
  props: VirtualElementProps
}

export interface VirtualTextElement {
  type: symbol
  props: VirtualTextElementProps
}

export type VirtualElementChild = VirtualElement | VirtualTextElement
