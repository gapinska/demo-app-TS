interface ChildProps {
  color: string
}

// export const Child = (props: ChildProps) => {
//   return <div>Hi there!</div>
// }

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>
}
