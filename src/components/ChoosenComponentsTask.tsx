const ChoosenComponentsTask = (props: { title: string, componentName: string | undefined }) => {
  return (
    <>
      <p>{props.title} - <span className="componentName">{props.componentName ? props.componentName : 'Not selected'}</span></p>
    </>
  )
}

export default ChoosenComponentsTask;