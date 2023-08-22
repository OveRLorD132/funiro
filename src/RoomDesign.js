import './RoomDesign.css'

export default function RoomDesign({ room, page }) {
  return (
    <div className="main-design-cont">
      <img className="main-image" src={room.source} alt=''
        style={{ height: page === room.index ? '500px' : '400px'}}
      />
      {page === room.index ? <div className='design-overlay'>
        <div className='overlay-left'>
          <div className='first-line'>{room.index + '  -  ' + room.name}</div>
          <div className='second-line'>{room.description}</div>
        </div>
        <img className='overlay-right' src='/to-page.png' alt=''/>
      </div> : ''} 
    </div>
  )
}