import Link from "next/link"

const Button = ({ children, icon, variante = "default", element, ...props }) => {
    const styles = {

        default: "flex items-center gap-2 bg-blue-zodiac-500 py-1 px-4 rounded hover:bg-blue-zodiac-600 active:bg-blue-zodiac-700 text-white2",
        vazadoAzul: "flex items-center gap-2 py-1 px-4 rounded border border-blue-zodiac-700 hover:bg-blue-zodiac-50 text-blue-zodiac-700",
        vazadoVermelho: "flex items-center gap-2 py-1 px-4 rounded border border-red-700 hover:bg-red-50 text-red-700",
        vazadoVerde: "flex items-center gap-2 py-1 px-4 rounded border border-vida-loca-700 hover:bg-vida-loca-50 text-vida-loca-700",
        branco: "flex items-center gap-2 py-1 px-4 rounded border border-white2-700 hover:bg-white2-50 text-white2-700",

    }
    const variantClass = styles[variante]

    return (<>
        {element === "link" ?
            <Link href="#" {...props} className={variantClass}>
                {icon}{children}
            </Link>
            :
            <div className={variantClass}>
                {icon}
                <input type="submit" value={children} />
            </div>

        }
    </>
    )
}
export default Button