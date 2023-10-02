const TextInput = ({ label, id, variante = "default", ...props }) => {

    const styles = {

        default: "rounded border p-2 outline-none focus:ring-black focus:ring-1",
        skeleton: "animate-pulse rounded-md bg-muted",

    }
    const variantClass = styles[variante]
    return (
        <div className="flex flex-col gap-1 my-2">
            <label htmlFor={id} className="font-semibold">{label}</label>
            <input type="text" id={id} className={variantClass} {...props} />
        </div>
    )
}
export default TextInput