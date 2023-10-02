'use client'

import Button from "@/app/components/Button"
import TextInput from "@/app/components/TextInput"

const FormLoading = async () => {

    return (
        <div>

            <TextInput variante="skeleton" className="h-6 w-10" />
            <TextInput variante="skeleton" className="h-6 w-10" />
            <TextInput variante="skeleton" className="h-6 w-10" />
            <TextInput variante="skeleton" className="h-6 w-10" />

            <div className="flex justify-around mt-10">

                <Button href="/" element="link" variante="skeleton" />
                <Button href="/" element="button" variante="skeleton" />

            </div>
        </div>

    )

}
export default FormLoading