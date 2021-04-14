function BrainFoodEntry (props){
    return (
      <div className ='brainfood-entry'>
        <div className='diary-entry-profile'>
          <div className='diary-entry-headshot'><img src={props.imagesrc} alt="logo"/></div>
          <div>
            <span className='diary-entry-title'>{props.headshotTitle}</span>
            <div className='DiaryEntryDate'>{props.date}</div>
          </div>
        </div>
        <div className='diary-entry-text'>
          <h2>{props.title}</h2>
          <p>{props.summary}</p>
        </div>
      </div>
    )
}

export default BrainFoodEntry
