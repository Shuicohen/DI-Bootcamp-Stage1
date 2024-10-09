function processInput(input: number | string | boolean): number | string | boolean {
    if (typeof input === "number") {
        return input * input;
    } else if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "boolean") {
        return !input;
    }
    return false;
}

console.log(processInput(5)); // 25
console.log(processInput("hello")); // "HELLO"
console.log(processInput(true)); // false