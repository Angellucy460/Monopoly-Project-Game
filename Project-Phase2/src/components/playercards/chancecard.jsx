const ChanceCard = ({ text }) => (
  <div className="card border-warning mb-3 text-center" style={{ width: '16rem', height: '22rem' }}>
    <div className="card-header bg-warning text-white fw-bold">CHANCE</div>
    <div className="card-body d-flex flex-column justify-content-center align-items-center">
      <div className="display-6 mb-2">❓</div>
      <p className="card-text fw-semibold">{text}</p>
    </div>
  </div>
);
export default ChanceCard;
