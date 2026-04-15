export default function CategoryRow(){
  const items = [
    "Presentation","Social Media","Video","Print","Docs","Website","Email"
  ];

  return (
    <div style={{display:'flex',gap:'20px',overflowX:'auto',padding:'20px 0'}}>
      {items.map((item,i)=> (
        <div key={i} style={{minWidth:'120px',background:'#1e293b',padding:'16px',borderRadius:'16px',textAlign:'center',color:'#fff'}}>
          {item}
        </div>
      ))}
    </div>
  )
}