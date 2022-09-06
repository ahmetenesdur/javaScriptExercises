export const classify = (numbers) => {
    if (numbers < 1) throw new Error('Classification is only possible for natural numbers.')
    let aliquotSum = 0;
    for (let i = 1; i < numbers; i++) {
        if (numbers % i === 0) aliquotSum += i;
    }
    return (aliquotSum === numbers) ? 'perfect' : (aliquotSum > numbers) ? 'abundant' : 'deficient';
};

console.log(classify(6));