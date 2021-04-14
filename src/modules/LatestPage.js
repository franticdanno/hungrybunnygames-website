import DiaryEntry from './DiaryEntry.js'

const articles = [
  <DiaryEntry
  imagesrc="./assets/headshot_fudge.png"
  title="#1 The Journey Begins..."
  date="10/04/2021"
  summary = <div><p>Oh boy! What a day!</p><p>We have finally launched our official <strong>Hungry Bunny Website</strong>! As we ramp up hiring for our game studio in the center of animal silicon valley, we invite you to join us on our journey as we seek to develop the latest and greatest in modern online gaming! Keep an eye out for the latest news. </p><p>Keep on hopping</p><p>See you soon!</p></div>
  headshotTitle="Fudge, CEO"
  />
]

function LatestPage (props){
    return (
      <div>
        {articles}
      </div>
    )
}

export default LatestPage
