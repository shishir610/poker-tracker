import SubHeading from "./SubHeading"
import { Input } from "@/components/ui/input"

export default function InputWithLabel({
    label,
    placeholder,
    disabled,
    value,
    onChange,
}) {
    return (
        <div>
            <SubHeading title={label} />
            <Input
                type="text"
                className="border border-black"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            />
        </div>
    )
}
