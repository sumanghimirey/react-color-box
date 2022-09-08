
const ColorInput = ({handleOnchnage}) => {
    return (
        <form className="ColorName">
            <input 
             autoFocus
            type='text'
            onChange={(e) => {
                handleOnchnage(e)
            }}
            placeholder="Type Color Name"
            required
            />
        </form>
    )
}

export default ColorInput