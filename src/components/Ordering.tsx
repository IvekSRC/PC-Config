const Ordering = (
  props: { 
    cpu: number | undefined, 
    cpuCooler: number | undefined, 
    motherboard: number | undefined, 
    memory: number | undefined, 
    storage: number | undefined, 
    videoCard: number | undefined, 
    case: number | undefined, 
    powerSuply: number | undefined, 
    monitor: number | undefined 
  }
) => {
  
  const addOrder = async () => {
    
  }
  
  return (
    <div className="order">
      <h2 className="orderTitle">Enter Your Data</h2>

      <form className="orderInputPart">
        <label className="orderInputName">Name and Surname </label>
        <input 
          type="text" 
          id="name" 
          pattern=".{3}" 
          title="Minimum 3 character"
        >
        </input>
      </form>

      <form className="orderInputPart">
        <label className="orderInputName">E-mail </label>
        <input 
          type="email" 
          id="email" 
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        >
        </input>
      </form>

      <form className="orderInputPart">
        <label className="orderInputName">Street </label>
        <input 
          type="text" 
          id="street" 
          pattern=".{3}" 
          title="Minimum 3 character"
        >
        </input>
      </form>

      <form className="orderInputPart">
        <label className="orderInputName">Number </label>
        <input 
          type="number" 
          id="streetNumber" 
        >
        </input>
      </form>

      <form className="orderInputPart">
        <label className="orderInputName">Town </label>
        <input 
          type="text" 
          id="town"
          pattern=".{3}" 
          title="Minimum 3 character" 
        >
        </input>
      </form>

      <form className="orderInputPart">
        <label className="orderInputName">Phone Number </label>
        <input 
          type="text" 
          id="phoneNumber"
          pattern=".{6}" 
          title="Minimum 6 character" 
        >
        </input>
      </form>

      <form className="orderInputPart">
        <button className="orderBtn" onClick={addOrder}>Buy</button>
      </form>
    </div>
  )
}

export default Ordering;