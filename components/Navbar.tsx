export default function Navbar(){
  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:'16px',background:'#111827',color:'#fff'}}>
      <h2>E-Invite Builder</h2>
      <input placeholder="Search..." style={{padding:'8px',borderRadius:'8px',border:'none'}} />
    </div>
  )
}