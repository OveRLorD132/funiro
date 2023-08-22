import './Tip.css';

export default function Tip({ tip, currentTip, index }) {
  return (
    <div className="tip-main-cont" style={{ boxShadow: currentTip === index + 1 ? '0px 0px 10px -2px rgba(0,0,0,0.75)' : ''}}>
      <img src={tip.source} alt='' className="tip-image"/>
      <div className="tip-desc">
        <div className="tip-header">{tip.header}</div>
        <div className="tip-date">{tip.date}</div>
      </div>
    </div>
  )
}