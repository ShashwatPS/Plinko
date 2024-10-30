const decimalMultiplier = 100000;

export const unpad = (num: number): number =>{
    return  num * decimalMultiplier;
}

export const pad = (num: number): number => {
    return num /decimalMultiplier;
}