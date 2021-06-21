interface ChildProps {
  color: string
  onClick: () => void
}

// export const Child = (props: ChildProps) => {
//   return <div>Hi there!</div>
// }

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click</button>
    </div>
  )
}

export const ChildAsFC: React.FC<ChildProps> = ({
  onClick,
  color,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click</button>
    </div>
  )
}

ChildAsFC.displayName
