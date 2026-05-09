type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}