export const Inputbox=({label,placeholder,onChange})=>{
    return <>
    <div className="text-xl ">{label}</div>
    <input placeholder={placeholder}  onChange={onChange}  />
    </>
}