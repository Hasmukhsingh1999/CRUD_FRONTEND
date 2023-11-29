
const Add = () => {
  return (
    <div>
        <form>
            <label>ADD new Book</label>
           <input type="text" placeholder="title" value={''} /> 
           <input type="text" placeholder="desc" value={''} /> 
           <input type="number" placeholder="price" value={''} /> 
           <input type="text" placeholder="cover" value={''} /> 
        </form>
    </div>
  )
}

export default Add