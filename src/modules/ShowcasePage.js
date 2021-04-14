import ShowcaseEntry from './ShowcaseEntry.js'

function ShowcasePage (props){
    return (
      <div>
        <ShowcaseEntry title='Carrots N Cabbage' imgsrc='assets/header_logo.png'/>
        <ShowcaseEntry title='Labyrinth' imgsrc='assets/header_logo.png' description='hello'/>
      </div>
    )
}

export default ShowcasePage
