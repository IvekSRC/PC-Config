const Button = (props: {isCollapsed: boolean, onClick: () => {}, title: string }) => {
  return (
    <button 
      className={"btn"} 
      style={ { backgroundColor: props.isCollapsed ? 'red' : 'green' } }
      onClick={() => props.onClick()} 
    >
      { props.isCollapsed ? 'Collapse' : 'Expand' }      
    </button>
  )
}

export default Button;