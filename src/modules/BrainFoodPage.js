import BrainFoodEntry from './BrainFoodEntry.js'

const articles =[
  <BrainFoodEntry
    imagesrc = '/assets/headshot_fudge.png'
    headshotTitle = 'Leo, CTO'
    date = "14/04/2021"
    title = "Website TechStack"
    summary = <div></div>
  />
]

function BrainFoodPage (props){
    return (
      <div>
      { articles}
      </div>
    )
}

export default BrainFoodPage
