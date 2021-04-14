function ShowcaseEntry (props){
    return (
      <div className ='showcase'>
        <h2>{props.title}</h2>
        <img src={props.imgsrc}></img>
        <p>{props.description}</p>
      </div>
    )
}

export default ShowcaseEntry
