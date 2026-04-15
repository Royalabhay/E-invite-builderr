export default function Sidebar() {
  return (
    <div style={{width:'90px',height:'100vh',background:'#020617',display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'20px',gap:'20px'}}>
      <button style={{background:'#6366f1',borderRadius:'50%',width:'50px',height:'50px',border:'none',color:'#fff',fontSize:'20px'}}>+</button>
      <p style={{color:'#fff'}}>Home</p>
      <p style={{color:'#fff'}}>Projects</p>
      <p style={{color:'#fff'}}>Templates</p>
      <p style={{color:'#fff'}}>Brand</p>
    </div>
  );
}
