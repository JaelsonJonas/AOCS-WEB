const TextInput = ({ label, id, ...props }) => {
    return (
        <div className="flex flex-col gap-1 my-2">
            <label htmlFor={id} className="font-semibold">{label}</label>
            <input type="text" {...props} id={id} className="rounded border p-2 outline-none focus:ring-black focus:ring-1" />
        </div>

    )
}
export default TextInput